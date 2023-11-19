#include "ObjCBridgeData.h"
#include "Class.h"
#include "Closure.h"
#include "MetadataReader.h"
#include "Protocol.h"
#include "Util.h"
#include "node_api_util.h"

#import <Foundation/Foundation.h>
#include <mach-o/dyld.h>
#include <mach-o/getsect.h>
#include <objc/objc.h>
#include <objc/runtime.h>

#ifdef EMBED_METADATA_SIZE
const unsigned char __attribute__((section("__objc_metadata,__objc_metadata")))
embedded_metadata[EMBED_METADATA_SIZE] = "NSMDSectionHeader";
#endif

namespace objc_bridge {

void finalize_bridge_data(napi_env env, void *data, void *hint) {
  auto bridgeData = (ObjCBridgeData *)data;
  delete bridgeData;
}

MDMetadataReader *loadMetadataFromFile(const char *metadata_path) {
  if (metadata_path == nullptr) {
    metadata_path = "metadata.nsmd";
  }

  auto f =
      fopen(metadata_path == nullptr ? "metadata.nsmd" : metadata_path, "r");
  if (f == nullptr) {
    fprintf(stderr, "metadata.nsmd not found\n");
    exit(1);
  }
  fseek(f, 0, SEEK_END);
  auto size = ftell(f);
  fseek(f, 0, SEEK_SET);
  auto buffer = (uint8_t *)malloc(size);
  fread(buffer, 1, size, f);
  fclose(f);
  return new MDMetadataReader(buffer, size);
}

ObjCBridgeData::ObjCBridgeData(napi_env env, const char *metadata_path) {
  napi_set_instance_data(env, this, finalize_bridge_data, nil);

  self_dl = dlopen(nullptr, RTLD_NOW);

#ifdef EMBED_METADATA_SIZE
  if (metadata_path != nullptr) {
    metadata = loadMetadataFromFile(metadata_path);
  } else {
    metadata =
        new MDMetadataReader((void *)embedded_metadata, EMBED_METADATA_SIZE);
  }
#else
  unsigned long segmentSize = 0;
  auto segmentData =
      getsegmentdata((const mach_header_64 *)_dyld_get_image_header(0),
                     "__objc_metadata", &segmentSize);
  if (segmentData != nullptr) {
    metadata = new MDMetadataReader(segmentData, segmentSize);
  } else {
    metadata = loadMetadataFromFile(metadata_path);
  }
#endif

  objc_autoreleasePool = objc_autoreleasePoolPush();
}

ObjCBridgeData::~ObjCBridgeData() {
  objc_autoreleasePoolPop(objc_autoreleasePool);
  delete metadata;
  dlclose(self_dl);
}

} // namespace objc_bridge
