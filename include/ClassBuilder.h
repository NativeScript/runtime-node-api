#ifndef CLASS_BUILDER_H
#define CLASS_BUILDER_H

#include "Class.h"
#include "ClassMember.h"
#include "objc/runtime.h"

@protocol ObjCBridgeClassBuilderProtocol

@end

namespace objc_bridge {

class ObjCProtocol;

class ClassBuilder : public ObjCClass {
public:
  ClassBuilder(napi_env env, napi_value constructor);
  ~ClassBuilder();

  void addProtocol(ObjCProtocol *protocol);
  MethodDescriptor *lookupMethodDescriptor(std::string &name);
  void addMethod(std::string &name, MethodDescriptor *desc, napi_value key,
                 napi_value func = nullptr);

  void build();

  MethodMap exposedMethods;
  std::unordered_set<ObjCProtocol *> protocols;
  bool isFinal = false;
};

} // namespace objc_bridge

#endif /* CLASS_BUILDER_H */
