#ifndef SEGAPPEND_H
#define SEGAPPEND_H

typedef enum segappend_status : unsigned int {
  segappend_ok,
  segappend_segment_not_found,
  segappend_file_not_found,
  segappend_linkedit_not_found,
  segappend_cannot_write,
} segappend_status;

extern "C" segappend_status segappend_create_segment(const char *binary_path,
                                                     const char *segment_name,
                                                     const void *data,
                                                     unsigned long size,
                                                     const char *output_path);

extern "C" segappend_status segappend_load_segment(const char *segment_name,
                                                   void **data,
                                                   unsigned long *size);

#endif
