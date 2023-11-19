#include "segappend.h"
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <vector>

#ifdef __APPLE__

#include <mach-o/dyld.h>
#include <mach-o/getsect.h>

segappend_status segappend_load_segment(const char *segment_name, void **data,
                                        unsigned long *size) {
  *data = NULL;
  *size = 0;

  void *data_out = getsegmentdata(
      (const mach_header_64 *)_dyld_get_image_header(0), segment_name, size);
  if (!data_out) {
    return segappend_segment_not_found;
  }

  *data = data_out;
  return segappend_ok;
}

inline unsigned long align(unsigned long size, unsigned long base) {
  unsigned long over = size % base;
  return over == 0 ? size : (size + (base - over));
}

inline unsigned long align_vmsize(unsigned long size) {
  return align(size > 0x4000 ? size : 0x4000, 0x1000);
}

inline unsigned long shift(unsigned long value, unsigned long amount,
                           unsigned long range_min, unsigned long range_max) {
  if (value < range_min || value > (range_max + range_min)) {
    return value;
  }
  return value + amount;
}

segappend_status segappend_create_segment(const char *binary_path,
                                          const char *segment_name,
                                          const void *data, unsigned long size,
                                          const char *output_path) {
  auto binary = fopen(binary_path, "rb");
  if (!binary) {
    return segappend_file_not_found;
  }

  fseek(binary, 0, SEEK_END);
  long binary_size = ftell(binary);
  fseek(binary, 0, SEEK_SET);
  char *binary_data = (char *)malloc(binary_size);
  fread(binary_data, 1, binary_size, binary);
  fclose(binary);

  auto header = (mach_header_64 *)binary_data;

  segment_command_64 *linkedit_cmd = NULL;

  auto segment = (segment_command_64 *)(header + 1);

  std::vector<load_command *> commands(header->ncmds);

  for (uint32_t i = 0; i < header->ncmds; i++) {
    commands[i] = (load_command *)segment;

    if (segment->cmd == LC_SEGMENT_64) {
      if (strcmp(segment->segname, SEG_LINKEDIT) == 0) {
        linkedit_cmd = segment;
      }
    }

    segment = (segment_command_64 *)((char *)segment + segment->cmdsize);
  }

  if (!linkedit_cmd) {
    return segappend_linkedit_not_found;
  }

  uint64_t rest_datasize =
      linkedit_cmd->fileoff - sizeof(mach_header_64) - header->sizeofcmds;

  auto seg = new segment_command_64();
  memset(seg, 0, sizeof(*seg));
  auto sec = new section_64();
  memset(sec, 0, sizeof(*sec));

  seg->cmd = LC_SEGMENT_64;
  seg->cmdsize = sizeof(*seg) + sizeof(*sec);

  memset(seg->segname, 0, sizeof(seg->segname));
  strcpy(seg->segname, segment_name);

  seg->vmaddr = linkedit_cmd->vmaddr;
  seg->vmsize = align_vmsize(size);
  seg->fileoff = linkedit_cmd->fileoff;
  seg->filesize = seg->vmsize;
  seg->maxprot = VM_PROT_READ;
  seg->initprot = seg->maxprot;
  seg->nsects = 1;

  memset(sec->sectname, 0, sizeof(sec->sectname));
  strcpy(sec->sectname, segment_name);
  memset(sec->segname, 0, sizeof(sec->segname));
  strcpy(sec->segname, segment_name);

  sec->addr = seg->vmaddr;
  sec->size = size;
  sec->offset = seg->fileoff;
  sec->align = size < 16 ? 0 : 4;

  linkedit_cmd->vmaddr += seg->vmsize;
  unsigned long linkedit_fileoff = linkedit_cmd->fileoff;
  linkedit_cmd->fileoff += seg->filesize;

#define SHIFT_CMD(cmd, field)                                                  \
  cmd->field = shift(cmd->field, seg->filesize, linkedit_fileoff,              \
                     linkedit_cmd->filesize);

  for (auto &cmd : commands) {
    switch (cmd->cmd) {
    case LC_DYLD_INFO:
    case LC_DYLD_INFO_ONLY: {
      auto dyld_info = (dyld_info_command *)cmd;
      SHIFT_CMD(dyld_info, rebase_off);
      SHIFT_CMD(dyld_info, bind_off);
      SHIFT_CMD(dyld_info, weak_bind_off);
      SHIFT_CMD(dyld_info, lazy_bind_off);
      SHIFT_CMD(dyld_info, export_off);
      break;
    }

    case LC_SYMTAB: {
      auto symtab = (symtab_command *)cmd;
      SHIFT_CMD(symtab, symoff);
      SHIFT_CMD(symtab, stroff);
      break;
    }

    case LC_DYSYMTAB: {
      auto dysymtab = (dysymtab_command *)cmd;
      SHIFT_CMD(dysymtab, tocoff);
      SHIFT_CMD(dysymtab, modtaboff);
      SHIFT_CMD(dysymtab, extrefsymoff);
      SHIFT_CMD(dysymtab, indirectsymoff);
      SHIFT_CMD(dysymtab, extreloff);
      SHIFT_CMD(dysymtab, locreloff);
      break;
    }

    case LC_CODE_SIGNATURE:
    case LC_FUNCTION_STARTS:
    case LC_DATA_IN_CODE:
    case LC_DYLIB_CODE_SIGN_DRS:
    case LC_LINKER_OPTIMIZATION_HINT:
    case LC_DYLD_EXPORTS_TRIE:
    case LC_DYLD_CHAINED_FIXUPS: {
      auto code_signature = (linkedit_data_command *)cmd;
      SHIFT_CMD(code_signature, dataoff);
      break;
    }

    default:
      break;
    }
  }

  unsigned long old_ncmds = header->ncmds;
  header->ncmds++;
  header->sizeofcmds += seg->cmdsize;

  auto fout = fopen(output_path, "wb");
  if (!fout) {
    return segappend_cannot_write;
  }

  char *finoff = binary_data;

  // Write header
  fwrite(finoff, 1, sizeof(*header), fout);
  finoff += sizeof(*header);

  // Write rest of load commands except linkedit
  for (uint32_t i = 0; i < old_ncmds; i++) {
    if (commands[i] == (load_command *)linkedit_cmd) {
      // Write custom load command
      fwrite(seg, 1, sizeof(*seg), fout);
      // Write custom section
      fwrite(sec, 1, sizeof(*sec), fout);
    }

    fwrite(commands[i], 1, commands[i]->cmdsize, fout);
  }
  // We're going to utilize the padding space in the header
  // so just add the new load command to old file size offset
  // that way, we don't have to shift offsets of every other
  // load command.
  finoff += header->sizeofcmds;

  // Write rest of data
  // note we subtract seg->cmdsize here since we used the padding
  // space in the header for the new load command.
  fwrite(finoff, 1, rest_datasize - seg->cmdsize, fout);
  finoff += rest_datasize - seg->cmdsize;

  // Write custom data
  fwrite(data, 1, size, fout);
  if (seg->filesize > size) {
    // Write padding
    void *padding = malloc(seg->filesize - size);
    memset(padding, 0, seg->filesize - size);
    fwrite(padding, 1, seg->filesize - size, fout);
    free(padding);
  }

  // Write linkedit data
  fwrite(finoff, 1, linkedit_cmd->filesize, fout);
  finoff += linkedit_cmd->filesize;

  fclose(fout);

  // chmod

  return segappend_ok;
}

#else

#error "Unsupported platform"

#endif
