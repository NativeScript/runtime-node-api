/// <reference types="@nativescript/objc-node-api" />
/// <reference path="./Runtime.d.ts" />

declare const MIDIChannelsWholePort: number;

declare const MIDINetworkBonjourServiceType: string;

declare const kMIDI1UPMaxSysexSize: number;

declare const kMIDIThruConnection_MaxEndpoints: number;

declare const kMIDIPropertyMaxTransmitChannels: interop.Pointer;

declare const kMIDIPropertySupportsShowControl: interop.Pointer;

declare const kMIDIPropertyProtocolID: interop.Pointer;

declare const kMIDIPropertyDisplayName: interop.Pointer;

declare const kMIDIPropertyDriverDeviceEditorApp: interop.Pointer;

declare const kMIDIPropertyMaxReceiveChannels: interop.Pointer;

declare const kMIDIPropertyIsDrumMachine: interop.Pointer;

declare const kMIDIPropertyIsSampler: interop.Pointer;

declare const kMIDIPropertyTransmitsBankSelectMSB: interop.Pointer;

declare const kMIDIPropertyTransmitsMTC: interop.Pointer;

declare const kMIDIPropertyTransmitsClock: interop.Pointer;

declare const kMIDIPropertyReceivesProgramChanges: interop.Pointer;

declare const kMIDIPropertySupportsGeneralMIDI: interop.Pointer;

declare const kMIDIPropertyConnectionUniqueID: interop.Pointer;

declare const kMIDIPropertySingleRealtimeEntity: interop.Pointer;

declare const kMIDIPropertyMaxSysExSpeed: interop.Pointer;

declare const kMIDIPropertyTransmitChannels: interop.Pointer;

declare const kMIDIPropertyReceiveChannels: interop.Pointer;

declare const kMIDIPropertyDeviceID: interop.Pointer;

declare const kMIDIPropertyModel: interop.Pointer;

declare const kMIDIInvalidUniqueID: number;

declare const kMIDIObjectNotFound: number;

declare const kMIDIServerStartErr: number;

declare const kMIDIMessageSendErr: number;

declare const kMIDINoCurrentSetup: number;

declare const kMIDIWrongPropertyType: number;

declare const kMIDIUnknownProperty: number;

declare const kMIDIPropertyIsMixer: interop.Pointer;

declare const kMIDIPropertyIsEmbeddedEntity: interop.Pointer;

declare const kMIDIPropertyOffline: interop.Pointer;

declare const kMIDIPropertyUniqueID: interop.Pointer;

declare const kMIDIUnknownEndpoint: number;

declare const kMIDIPropertyTransmitsBankSelectLSB: interop.Pointer;

declare const kMIDIPropertyPanDisruptsStereo: interop.Pointer;

declare const kMIDIPropertyReceivesBankSelectLSB: interop.Pointer;

declare const kMIDIUnknownError: number;

declare const kMIDIPropertyReceivesBankSelectMSB: interop.Pointer;

declare const kMIDIPropertyPrivate: interop.Pointer;

declare const kMIDIPropertyDriverOwner: interop.Pointer;

declare const kMIDIIDNotUnique: number;

declare const kMIDIPropertyNameConfigurationDictionary: interop.Pointer;

declare const kMIDIWrongThread: number;

declare const kMIDINotPermitted: number;

declare const kMIDIPropertyImage: interop.Pointer;

declare const kMIDIPropertyIsEffectUnit: interop.Pointer;

declare const kMIDIPropertyAdvanceScheduleTimeMuSec: interop.Pointer;

declare const MIDINetworkNotificationSessionDidChange: string;

declare const kMIDIPropertyUMPActiveGroupBitmap: interop.Pointer;

declare const kMIDIInvalidClient: number;

declare const kMIDINoConnection: number;

declare const kMIDIPropertySupportsMMC: interop.Pointer;

declare const kMIDIPropertyReceivesMTC: interop.Pointer;

declare const kMIDIInvalidPort: number;

declare const kMIDIPropertyManufacturer: interop.Pointer;

declare const kMIDIObjectType_ExternalMask: interop.Enum<typeof MIDIObjectType>;

declare const kMIDIPropertyUMPCanTransmitGroupless: interop.Pointer;

declare const kMIDIPropertyIsBroadcast: interop.Pointer;

declare const kMIDIPropertyTransmitsNotes: interop.Pointer;

declare const kMIDISetupFormatErr: number;

declare const kMIDIWrongEndpointType: number;

declare const kMIDIPropertyNameConfiguration: interop.Pointer;

declare const kMIDIPropertyTransmitsProgramChanges: interop.Pointer;

declare const kMIDIPropertyCanRoute: interop.Pointer;

declare const kMIDIPropertyReceivesNotes: interop.Pointer;

declare const MIDINetworkNotificationContactsDidChange: string;

declare const kMIDIPropertyName: interop.Pointer;

declare const kMIDIPropertyDriverVersion: interop.Pointer;

declare const kMIDIPropertyReceivesClock: interop.Pointer;

declare const MIDIProgramChangeOptions: {
  kMIDIProgramChangeBankValid: 1,
};

declare const MIDIUtilityStatus: {
  NOOP: 0,
  JitterReductionClock: 1,
  JitterReductionTimestamp: 2,
};

declare const MIDISysExStatus: {
  Complete: 0,
  Start: 1,
  Continue: 2,
  End: 3,
  MixedDataSetHeader: 8,
  MixedDataSetPayload: 9,
};

declare const MIDITransformControlType: {
  Type_7Bit: 0,
  Type_14Bit: 1,
  Type_7BitRPN: 2,
  Type_14BitRPN: 3,
  Type_7BitNRPN: 4,
  Type_14BitNRPN: 5,
};

declare const MIDIPerNoteManagementOptions: {
  Reset: 1,
  Detach: 2,
};

declare const MIDITransformType: {
  None: 0,
  FilterOut: 1,
  MapControl: 2,
  Add: 8,
  Scale: 9,
  MinValue: 10,
  MaxValue: 11,
  MapValue: 12,
};

declare const MIDINetworkConnectionPolicy: {
  NoOne: 0,
  HostsInContactList: 1,
  Anyone: 2,
};

declare const MIDINotificationMessageID: {
  SetupChanged: 1,
  ObjectAdded: 2,
  ObjectRemoved: 3,
  PropertyChanged: 4,
  ThruConnectionsChanged: 5,
  SerialPortOwnerChanged: 6,
  IOError: 7,
};

declare const MIDIProtocolID: {
  Protocol_1_0: 1,
  Protocol_2_0: 2,
};

declare const MIDIObjectType: {
  Other: -1,
  Device: 0,
  Entity: 1,
  Source: 2,
  Destination: 3,
  ExternalDevice: 16,
  ExternalEntity: 17,
  ExternalSource: 18,
  ExternalDestination: 19,
};

declare const MIDIMessageType: {
  Utility: 0,
  System: 1,
  ChannelVoice1: 2,
  SysEx: 3,
  ChannelVoice2: 4,
  Data128: 5,
  UnknownF: 15,
};

declare const MIDINoteAttribute: {
  None: 0,
  ManufacturerSpecific: 1,
  ProfileSpecific: 2,
  Pitch: 3,
};

declare const MIDICVStatus: {
  NoteOff: 8,
  NoteOn: 9,
  PolyPressure: 10,
  ControlChange: 11,
  ProgramChange: 12,
  ChannelPressure: 13,
  PitchBend: 14,
  RegisteredPNC: 0,
  AssignablePNC: 1,
  RegisteredControl: 2,
  AssignableControl: 3,
  RelRegisteredControl: 4,
  RelAssignableControl: 5,
  PerNotePitchBend: 6,
  PerNoteMgmt: 15,
};

declare const MIDISystemStatus: {
  StartOfExclusive: 240,
  EndOfExclusive: 247,
  MTC: 241,
  SongPosPointer: 242,
  SongSelect: 243,
  TuneRequest: 246,
  TimingClock: 248,
  Start: 250,
  Continue: 251,
  Stop: 252,
  ActiveSending: 254,
  ActiveSensing: 254,
  SystemReset: 255,
};

declare class MIDICIDeviceIdentification {
  constructor(init?: MIDICIDeviceIdentification);
  manufacturer: unknown /* const array */;
  family: unknown /* const array */;
  modelNumber: unknown /* const array */;
  revisionLevel: unknown /* const array */;
  reserved: unknown /* const array */;
}

declare class unnamed_17970923108381981368 {
  constructor(init?: unnamed_17970923108381981368);
  words: unknown /* const array */;
}

declare class unnamed_7081811601187947756 {
  constructor(init?: unnamed_7081811601187947756);
  byteCount: number;
  streamID: number;
  data: unknown /* const array */;
  reserved: number;
}

declare class unnamed_11435823590264782268 {
  constructor(init?: unnamed_11435823590264782268);
  note: number;
  options: interop.Enum<typeof MIDIPerNoteManagementOptions>;
  reserved: unknown /* const array */;
}

declare class unnamed_2888092256551312969 {
  constructor(init?: unnamed_2888092256551312969);
  bank: number;
  index: number;
  data: number;
}

declare class unnamed_11368223911962186892 {
  constructor(init?: unnamed_11368223911962186892);
  noteNumber: number;
  index: number;
  data: number;
}

declare class unnamed_2593596893689113354 {
  constructor(init?: unnamed_2593596893689113354);
  data: number;
  reserved: unknown /* const array */;
}

declare class unnamed_14062039473734706767 {
  constructor(init?: unnamed_14062039473734706767);
  options: interop.Enum<typeof MIDIProgramChangeOptions>;
  program: number;
  reserved: unknown /* const array */;
  bank: number;
}

declare class unnamed_13126177750879257941 {
  constructor(init?: unnamed_13126177750879257941);
  status: interop.Enum<typeof MIDISystemStatus>;
}

declare class unnamed_12051589419155944926 {
  constructor(init?: unnamed_12051589419155944926);
  status: interop.Enum<typeof MIDIUtilityStatus>;
}

declare class MIDIMessage_128 {
  constructor(init?: MIDIMessage_128);
  word0: number;
  word1: number;
  word2: number;
  word3: number;
}

declare class MIDIMessage_64 {
  constructor(init?: MIDIMessage_64);
  word0: number;
  word1: number;
}

declare class MIDIDriverInterface {
  constructor(init?: MIDIDriverInterface);
  _reserved: interop.Pointer;
  QueryInterface: (p1: interop.PointerConvertible, p2: CFUUIDBytes, p3: interop.PointerConvertible) => number | null;
  AddRef: (p1: interop.PointerConvertible) => number | null;
  Release: (p1: interop.PointerConvertible) => number | null;
  FindDevices: (p1: interop.PointerConvertible, p2: number) => number | null;
  Start: (p1: interop.PointerConvertible, p2: number) => number | null;
  Stop: (p1: interop.PointerConvertible) => number | null;
  Configure: (p1: interop.PointerConvertible, p2: number) => number | null;
  Send: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: interop.PointerConvertible, p4: interop.PointerConvertible) => number | null;
  EnableSource: (p1: interop.PointerConvertible, p2: number, p3: number) => number | null;
  Flush: (p1: interop.PointerConvertible, p2: number, p3: interop.PointerConvertible, p4: interop.PointerConvertible) => number | null;
  Monitor: (p1: interop.PointerConvertible, p2: number, p3: interop.PointerConvertible) => number | null;
  SendPackets: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: interop.PointerConvertible, p4: interop.PointerConvertible) => number | null;
  MonitorEvents: (p1: interop.PointerConvertible, p2: number, p3: interop.PointerConvertible) => number | null;
}

declare class MIDIControlTransform {
  constructor(init?: MIDIControlTransform);
  controlType: interop.Enum<typeof MIDITransformControlType>;
  remappedControlType: interop.Enum<typeof MIDITransformControlType>;
  controlNumber: number;
  transform: interop.Enum<typeof MIDITransformType>;
  param: number;
}

declare class MIDITransform {
  constructor(init?: MIDITransform);
  transform: interop.Enum<typeof MIDITransformType>;
  param: number;
}

declare class unnamed_14683839876397716018 {
  constructor(init?: unnamed_14683839876397716018);
  data: number;
  reserved: unknown /* const array */;
}

declare class MIDIValueMap {
  constructor(init?: MIDIValueMap);
  value: unknown /* const array */;
}

declare class unnamed_9634318595601872412 {
  constructor(init?: unnamed_9634318595601872412);
  status: interop.Enum<typeof MIDISysExStatus>;
}

declare class MIDIUniversalMessage {
  constructor(init?: MIDIUniversalMessage);
  type: interop.Enum<typeof MIDIMessageType>;
  group: number;
  reserved: unknown /* const array */;
}

declare class unnamed_5628475797123894512 {
  constructor(init?: unnamed_5628475797123894512);
  noteNumber: number;
  pressure: number;
}

declare class unnamed_16402910938094103343 {
  constructor(init?: unnamed_16402910938094103343);
  status: interop.Enum<typeof MIDICVStatus>;
  channel: number;
  reserved: unknown /* const array */;
}

declare class MIDIIOErrorNotification {
  constructor(init?: MIDIIOErrorNotification);
  messageID: interop.Enum<typeof MIDINotificationMessageID>;
  messageSize: number;
  driverDevice: number;
  errorCode: number;
}

declare class MIDIObjectPropertyChangeNotification {
  constructor(init?: MIDIObjectPropertyChangeNotification);
  messageID: interop.Enum<typeof MIDINotificationMessageID>;
  messageSize: number;
  object: number;
  objectType: interop.Enum<typeof MIDIObjectType>;
  propertyName: interop.Pointer;
}

declare class MIDIEventPacket {
  constructor(init?: MIDIEventPacket);
  timeStamp: number;
  wordCount: number;
  words: unknown /* const array */;
}

declare class MIDINotification {
  constructor(init?: MIDINotification);
  messageID: interop.Enum<typeof MIDINotificationMessageID>;
  messageSize: number;
}

declare class MIDISysexSendRequest {
  constructor(init?: MIDISysexSendRequest);
  destination: number;
  data: interop.Pointer;
  bytesToSend: number;
  complete: number;
  reserved: unknown /* const array */;
  completionProc: (p1: interop.PointerConvertible) => void | null;
  completionRefCon: interop.Pointer;
}

declare class MIDIMessage_96 {
  constructor(init?: MIDIMessage_96);
  word0: number;
  word1: number;
  word2: number;
}

declare class unnamed_7453662613991937504 {
  constructor(init?: unnamed_7453662613991937504);
  index: number;
  reserved: number;
  data: number;
}

declare class unnamed_8841576931215502319 {
  constructor(init?: unnamed_8841576931215502319);
  status: interop.Enum<typeof MIDICVStatus>;
  channel: number;
  reserved: unknown /* const array */;
}

declare class unnamed_16554494975097904569 {
  constructor(init?: unnamed_16554494975097904569);
  number: number;
  attributeType: interop.Enum<typeof MIDINoteAttribute>;
  velocity: number;
  attribute: number;
}

declare class unnamed_4427738051773292019 {
  constructor(init?: unnamed_4427738051773292019);
  mdsID: number;
  data: unknown /* const array */;
  reserved: number;
}

declare class MIDIThruConnectionParams {
  constructor(init?: MIDIThruConnectionParams);
  version: number;
  numSources: number;
  sources: unknown /* const array */;
  numDestinations: number;
  destinations: unknown /* const array */;
  channelMap: unknown /* const array */;
  lowVelocity: number;
  highVelocity: number;
  lowNote: number;
  highNote: number;
  noteNumber: MIDITransform;
  velocity: MIDITransform;
  keyPressure: MIDITransform;
  channelPressure: MIDITransform;
  programChange: MIDITransform;
  pitchBend: MIDITransform;
  filterOutSysEx: number;
  filterOutMTC: number;
  filterOutBeatClock: number;
  filterOutTuneRequest: number;
  reserved2: unknown /* const array */;
  filterOutAllControls: number;
  numControlTransforms: number;
  numMaps: number;
  reserved3: unknown /* const array */;
}

declare class unnamed_12386769957966986974 {
  constructor(init?: unnamed_12386769957966986974);
  status: interop.Enum<typeof MIDISysExStatus>;
  channel: number;
  data: unknown /* const array */;
  reserved: number;
}

declare class unnamed_14063882474431678275 {
  constructor(init?: unnamed_14063882474431678275);
  noteNumber: number;
  reserved: number;
  pressure: number;
}

declare class MIDISysexSendRequestUMP {
  constructor(init?: MIDISysexSendRequestUMP);
  destination: number;
  words: interop.Pointer;
  wordsToSend: number;
  complete: number;
  completionProc: (p1: interop.PointerConvertible) => void | null;
  completionRefCon: interop.Pointer;
}

declare class MIDIPacket {
  constructor(init?: MIDIPacket);
  timeStamp: number;
  length: number;
  data: unknown /* const array */;
}

declare class MIDIObjectAddRemoveNotification {
  constructor(init?: MIDIObjectAddRemoveNotification);
  messageID: interop.Enum<typeof MIDINotificationMessageID>;
  messageSize: number;
  parent: number;
  parentType: interop.Enum<typeof MIDIObjectType>;
  child: number;
  childType: interop.Enum<typeof MIDIObjectType>;
}

declare class MIDIThruConnectionEndpoint {
  constructor(init?: MIDIThruConnectionEndpoint);
  endpointRef: number;
  uniqueID: number;
}

declare class unnamed_4205869046876747278 {
  constructor(init?: unnamed_4205869046876747278);
  number: number;
  velocity: number;
}

declare class unnamed_12312143496163422705 {
  constructor(init?: unnamed_12312143496163422705);
  index: number;
  data: number;
}

declare class unnamed_13420071257372884654 {
  constructor(init?: unnamed_13420071257372884654);
  noteNumber: number;
  reserved: number;
  bend: number;
}

type unnamed_2704653172165042606Descriptor = 
  | { note: unnamed_16554494975097904569 }
  | { polyPressure: unnamed_14063882474431678275 }
  | { controlChange: unnamed_7453662613991937504 }
  | { programChange: unnamed_14062039473734706767 }
  | { channelPressure: unnamed_14683839876397716018 }
  | { pitchBend: unnamed_2593596893689113354 }
  | { perNoteController: unnamed_11368223911962186892 }
  | { controller: unnamed_2888092256551312969 }
  | { perNotePitchBend: unnamed_13420071257372884654 }
  | { perNoteManagement: unnamed_11435823590264782268 };

declare class unnamed_2704653172165042606 {
  constructor(init?: unnamed_2704653172165042606Descriptor);
  note: unnamed_16554494975097904569;
  polyPressure: unnamed_14063882474431678275;
  controlChange: unnamed_7453662613991937504;
  programChange: unnamed_14062039473734706767;
  channelPressure: unnamed_14683839876397716018;
  pitchBend: unnamed_2593596893689113354;
  perNoteController: unnamed_11368223911962186892;
  controller: unnamed_2888092256551312969;
  perNotePitchBend: unnamed_13420071257372884654;
  perNoteManagement: unnamed_11435823590264782268;
}

type unnamed_16549881843242635981Descriptor = 
  | { sysex8: unnamed_7081811601187947756 }
  | { mixedDataSet: unnamed_4427738051773292019 };

declare class unnamed_16549881843242635981 {
  constructor(init?: unnamed_16549881843242635981Descriptor);
  sysex8: unnamed_7081811601187947756;
  mixedDataSet: unnamed_4427738051773292019;
}

type unnamed_3075588569241680997Descriptor = 
  | { note: unnamed_4205869046876747278 }
  | { polyPressure: unnamed_5628475797123894512 }
  | { controlChange: unnamed_12312143496163422705 }
  | { program: number }
  | { channelPressure: number }
  | { pitchBend: number };

declare class unnamed_3075588569241680997 {
  constructor(init?: unnamed_3075588569241680997Descriptor);
  note: unnamed_4205869046876747278;
  polyPressure: unnamed_5628475797123894512;
  controlChange: unnamed_12312143496163422705;
  program: number;
  channelPressure: number;
  pitchBend: number;
}

type unnamed_7913187867891091599Descriptor = 
  | { timeCode: number }
  | { songPositionPointer: number }
  | { songSelect: number };

declare class unnamed_7913187867891091599 {
  constructor(init?: unnamed_7913187867891091599Descriptor);
  timeCode: number;
  songPositionPointer: number;
  songSelect: number;
}

type unnamed_6369035209987279977Descriptor = 
  | { jitterReductionClock: number }
  | { jitterReductionTimestamp: number };

declare class unnamed_6369035209987279977 {
  constructor(init?: unnamed_6369035209987279977Descriptor);
  jitterReductionClock: number;
  jitterReductionTimestamp: number;
}

type unnamed_5123572552879753423Descriptor = 
  | { utility: unnamed_12051589419155944926 }
  | { system: unnamed_13126177750879257941 }
  | { channelVoice1: unnamed_8841576931215502319 }
  | { sysEx: unnamed_12386769957966986974 }
  | { channelVoice2: unnamed_16402910938094103343 }
  | { data128: unnamed_9634318595601872412 }
  | { unknown: unnamed_17970923108381981368 };

declare class unnamed_5123572552879753423 {
  constructor(init?: unnamed_5123572552879753423Descriptor);
  utility: unnamed_12051589419155944926;
  system: unnamed_13126177750879257941;
  channelVoice1: unnamed_8841576931215502319;
  sysEx: unnamed_12386769957966986974;
  channelVoice2: unnamed_16402910938094103343;
  data128: unnamed_9634318595601872412;
  unknown: unnamed_17970923108381981368;
}

declare function MIDIClientCreate(name: interop.PointerConvertible, notifyProc: (p1: interop.PointerConvertible, p2: interop.PointerConvertible) => void, notifyRefCon: interop.PointerConvertible, outClient: interop.PointerConvertible): number;

declare function MIDIClientCreateWithBlock(name: interop.PointerConvertible, outClient: interop.PointerConvertible, notifyBlock: (p1: interop.PointerConvertible) => void): number;

declare function MIDIClientDispose(client: number): number;

declare function MIDIInputPortCreateWithProtocol(client: number, portName: interop.PointerConvertible, protocol: interop.Enum<typeof MIDIProtocolID>, outPort: interop.PointerConvertible, receiveBlock: (p1: interop.PointerConvertible, p2: interop.PointerConvertible) => void): number;

declare function MIDIInputPortCreate(client: number, portName: interop.PointerConvertible, readProc: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: interop.PointerConvertible) => void, refCon: interop.PointerConvertible, outPort: interop.PointerConvertible): number;

declare function MIDIInputPortCreateWithBlock(client: number, portName: interop.PointerConvertible, outPort: interop.PointerConvertible, readBlock: (p1: interop.PointerConvertible, p2: interop.PointerConvertible) => void): number;

declare function MIDIOutputPortCreate(client: number, portName: interop.PointerConvertible, outPort: interop.PointerConvertible): number;

declare function MIDIPortDispose(port: number): number;

declare function MIDIPortConnectSource(port: number, source: number, connRefCon: interop.PointerConvertible): number;

declare function MIDIPortDisconnectSource(port: number, source: number): number;

declare function MIDIGetNumberOfDevices(): number;

declare function MIDIGetDevice(deviceIndex0: number): number;

declare function MIDIDeviceGetNumberOfEntities(device: number): number;

declare function MIDIDeviceGetEntity(device: number, entityIndex0: number): number;

declare function MIDIEntityGetNumberOfSources(entity: number): number;

declare function MIDIEntityGetSource(entity: number, sourceIndex0: number): number;

declare function MIDIEntityGetNumberOfDestinations(entity: number): number;

declare function MIDIEntityGetDestination(entity: number, destIndex0: number): number;

declare function MIDIEntityGetDevice(inEntity: number, outDevice: interop.PointerConvertible): number;

declare function MIDIGetNumberOfSources(): number;

declare function MIDIGetSource(sourceIndex0: number): number;

declare function MIDIGetNumberOfDestinations(): number;

declare function MIDIGetDestination(destIndex0: number): number;

declare function MIDIEndpointGetEntity(inEndpoint: number, outEntity: interop.PointerConvertible): number;

declare function MIDIDestinationCreateWithProtocol(client: number, name: interop.PointerConvertible, protocol: interop.Enum<typeof MIDIProtocolID>, outDest: interop.PointerConvertible, readBlock: (p1: interop.PointerConvertible, p2: interop.PointerConvertible) => void): number;

declare function MIDIDestinationCreate(client: number, name: interop.PointerConvertible, readProc: (p1: interop.PointerConvertible, p2: interop.PointerConvertible, p3: interop.PointerConvertible) => void, refCon: interop.PointerConvertible, outDest: interop.PointerConvertible): number;

declare function MIDIDestinationCreateWithBlock(client: number, name: interop.PointerConvertible, outDest: interop.PointerConvertible, readBlock: (p1: interop.PointerConvertible, p2: interop.PointerConvertible) => void): number;

declare function MIDISourceCreateWithProtocol(client: number, name: interop.PointerConvertible, protocol: interop.Enum<typeof MIDIProtocolID>, outSrc: interop.PointerConvertible): number;

declare function MIDISourceCreate(client: number, name: interop.PointerConvertible, outSrc: interop.PointerConvertible): number;

declare function MIDIEndpointDispose(endpt: number): number;

declare function MIDIGetNumberOfExternalDevices(): number;

declare function MIDIGetExternalDevice(deviceIndex0: number): number;

declare function MIDIObjectGetIntegerProperty(obj: number, propertyID: interop.PointerConvertible, outValue: interop.PointerConvertible): number;

declare function MIDIObjectSetIntegerProperty(obj: number, propertyID: interop.PointerConvertible, value: number): number;

declare function MIDIObjectGetStringProperty(obj: number, propertyID: interop.PointerConvertible, str: interop.PointerConvertible): number;

declare function MIDIObjectSetStringProperty(obj: number, propertyID: interop.PointerConvertible, str: interop.PointerConvertible): number;

declare function MIDIObjectGetDataProperty(obj: number, propertyID: interop.PointerConvertible, outData: interop.PointerConvertible): number;

declare function MIDIObjectSetDataProperty(obj: number, propertyID: interop.PointerConvertible, data: interop.PointerConvertible): number;

declare function MIDIObjectGetDictionaryProperty(obj: number, propertyID: interop.PointerConvertible, outDict: interop.PointerConvertible): number;

declare function MIDIObjectSetDictionaryProperty(obj: number, propertyID: interop.PointerConvertible, dict: interop.PointerConvertible): number;

declare function MIDIObjectGetProperties(obj: number, outProperties: interop.PointerConvertible, deep: number): number;

declare function MIDIObjectRemoveProperty(obj: number, propertyID: interop.PointerConvertible): number;

declare function MIDIObjectFindByUniqueID(inUniqueID: number, outObject: interop.PointerConvertible, outObjectType: interop.PointerConvertible): number;

declare function MIDISendEventList(port: number, dest: number, evtlist: interop.PointerConvertible): number;

declare function MIDISend(port: number, dest: number, pktlist: interop.PointerConvertible): number;

declare function MIDISendSysex(request: interop.PointerConvertible): number;

declare function MIDISendUMPSysex(umpRequest: interop.PointerConvertible): number;

declare function MIDISendUMPSysex8(umpRequest: interop.PointerConvertible): number;

declare function MIDIEventPacketSysexBytesForGroup(pkt: interop.PointerConvertible, groupIndex: number, outData: interop.PointerConvertible): number;

declare function MIDIReceivedEventList(src: number, evtlist: interop.PointerConvertible): number;

declare function MIDIReceived(src: number, pktlist: interop.PointerConvertible): number;

declare function MIDIFlushOutput(dest: number): number;

declare function MIDIRestart(): number;

declare function MIDIEventListInit(evtlist: interop.PointerConvertible, protocol: interop.Enum<typeof MIDIProtocolID>): interop.Pointer;

declare function MIDIEventListAdd(evtlist: interop.PointerConvertible, listSize: number, curPacket: interop.PointerConvertible, time: number, wordCount: number, words: interop.PointerConvertible): interop.Pointer;

declare function MIDIPacketListInit(pktlist: interop.PointerConvertible): interop.Pointer;

declare function MIDIPacketListAdd(pktlist: interop.PointerConvertible, listSize: number, curPacket: interop.PointerConvertible, time: number, nData: number, data: interop.PointerConvertible): interop.Pointer;

declare function MIDIDeviceNewEntity(device: number, name: interop.PointerConvertible, protocol: interop.Enum<typeof MIDIProtocolID>, embedded: number, numSourceEndpoints: number, numDestinationEndpoints: number, newEntity: interop.PointerConvertible): number;

declare function MIDIDeviceAddEntity(device: number, name: interop.PointerConvertible, embedded: number, numSourceEndpoints: number, numDestinationEndpoints: number, newEntity: interop.PointerConvertible): number;

declare function MIDIDeviceRemoveEntity(device: number, entity: number): number;

declare function MIDIEntityAddOrRemoveEndpoints(entity: number, numSourceEndpoints: number, numDestinationEndpoints: number): number;

declare function MIDISetupAddDevice(device: number): number;

declare function MIDISetupRemoveDevice(device: number): number;

declare function MIDISetupAddExternalDevice(device: number): number;

declare function MIDISetupRemoveExternalDevice(device: number): number;

declare function MIDIExternalDeviceCreate(name: interop.PointerConvertible, manufacturer: interop.PointerConvertible, model: interop.PointerConvertible, outDevice: interop.PointerConvertible): number;

declare function MIDIThruConnectionParamsInitialize(inConnectionParams: interop.PointerConvertible): void;

declare function MIDIThruConnectionCreate(inPersistentOwnerID: interop.PointerConvertible, inConnectionParams: interop.PointerConvertible, outConnection: interop.PointerConvertible): number;

declare function MIDIThruConnectionDispose(connection: number): number;

declare function MIDIThruConnectionGetParams(connection: number, outConnectionParams: interop.PointerConvertible): number;

declare function MIDIThruConnectionSetParams(connection: number, inConnectionParams: interop.PointerConvertible): number;

declare function MIDIThruConnectionFind(inPersistentOwnerID: interop.PointerConvertible, outConnectionList: interop.PointerConvertible): number;

declare function MIDIDeviceCreate(owner: interop.PointerConvertible, name: interop.PointerConvertible, manufacturer: interop.PointerConvertible, model: interop.PointerConvertible, outDevice: interop.PointerConvertible): number;

declare function MIDIDeviceDispose(device: number): number;

declare function MIDIDeviceListGetNumberOfDevices(devList: number): number;

declare function MIDIDeviceListGetDevice(devList: number, index0: number): number;

declare function MIDIDeviceListAddDevice(devList: number, dev: number): number;

declare function MIDIDeviceListDispose(devList: number): number;

declare function MIDIEndpointSetRefCons(endpt: number, ref1: interop.PointerConvertible, ref2: interop.PointerConvertible): number;

declare function MIDIEndpointGetRefCons(endpt: number, ref1: interop.PointerConvertible, ref2: interop.PointerConvertible): number;

declare function MIDIGetDriverIORunLoop(): interop.Pointer;

declare function MIDIGetDriverDeviceList(driver: interop.PointerConvertible): number;

declare function MIDIEventListForEachEvent(evtlist: interop.PointerConvertible, visitor: (p1: interop.PointerConvertible, p2: number, p3: MIDIUniversalMessage) => void, visitorContext: interop.PointerConvertible): void;

declare function MIDIBluetoothDriverActivateAllConnections(): number;

declare function MIDIBluetoothDriverDisconnect(uuid: interop.PointerConvertible): number;

declare interface MIDICIProfileResponderDelegate extends NSObjectProtocol {
  connectInitiatorWithDeviceInfo(initiatorMUID: NSNumber, deviceInfo: MIDICIDeviceInfo): boolean;

  initiatorDisconnected(initiatorMUID: NSNumber): this;

  willSetProfileOnChannelEnabled?(aProfile: MIDICIProfile, channel: number, shouldEnable: boolean): boolean;

  handleDataForProfileOnChannelData?(aProfile: MIDICIProfile, channel: number, inData: NSData): void;
}

declare class MIDICIProfileResponderDelegate extends NativeObject implements MIDICIProfileResponderDelegate {
}

declare class MIDICIResponder extends NSObject {
  readonly initiators: NSArray;

  readonly profileDelegate: MIDICIProfileResponderDelegate;

  readonly deviceInfo: MIDICIDeviceInfo;

  initWithDeviceInfoProfileDelegateProfileStatesSupportProperties(deviceInfo: MIDICIDeviceInfo, delegate: MIDICIProfileResponderDelegate, profileList: NSArray<interop.Object> | Array<interop.Object>, propertiesSupported: boolean): this;

  notifyProfileOnChannelIsEnabled(aProfile: MIDICIProfile, channel: number, enabledState: boolean): boolean;

  sendProfileOnChannelProfileData(aProfile: MIDICIProfile, channel: number, profileSpecificData: NSData): boolean;

  start(): boolean;

  stop(): void;
}

declare class MIDICIDiscoveryManager extends NSObject {
  static sharedInstance(): MIDICIDiscoveryManager;

  discoverWithHandler(completedHandler: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;
}

declare class MIDICISession extends NSObject {
  initWithDiscoveredNodeDataReadyHandlerDisconnectHandler(discoveredNode: MIDICIDiscoveredNode, handler: () => void, disconnectHandler: (p1: MIDICISession, p2: NSError) => void): this;

  readonly midiDestination: number;

  readonly supportsProfileCapability: boolean;

  readonly supportsPropertyCapability: boolean;

  readonly deviceInfo: MIDICIDeviceInfo;

  readonly maxSysExSize: NSNumber;

  readonly maxPropertyRequests: NSNumber;

  profileStateForChannel(channel: number): MIDICIProfileState;

  enableProfileOnChannelError(profile: MIDICIProfile, channel: number, outError: interop.PointerConvertible): boolean;

  disableProfileOnChannelError(profile: MIDICIProfile, channel: number, outError: interop.PointerConvertible): boolean;

  sendProfileOnChannelProfileData(profile: MIDICIProfile, channel: number, profileSpecificData: NSData): boolean;

  profileChangedCallback: (p1: MIDICISession, p2: number, p3: MIDICIProfile, p4: boolean) => void;

  profileSpecificDataHandler: (p1: MIDICISession, p2: number, p3: MIDICIProfile, p4: NSData) => void;
}

declare class MIDICIDiscoveredNode extends NSObject implements NSSecureCoding {
  readonly destination: number;

  readonly deviceInfo: MIDICIDeviceInfo;

  readonly supportsProfiles: boolean;

  readonly supportsProperties: boolean;

  readonly maximumSysExSize: NSNumber;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class MIDICIDeviceInfo extends NSObject implements NSSecureCoding {
  readonly manufacturerID: NSData;

  readonly family: NSData;

  readonly modelNumber: NSData;

  readonly revisionLevel: NSData;

  readonly midiDestination: number;

  initWithDestinationManufacturerFamilyModelRevision(midiDestination: number, manufacturer: NSData, family: NSData, modelNumber: NSData, revisionLevel: NSData): this;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class MIDINetworkSession extends NSObject {
  static defaultSession(): MIDINetworkSession;

  isEnabled: boolean;

  readonly networkPort: number;

  readonly networkName: string;

  readonly localName: string;

  connectionPolicy: interop.Enum<typeof MIDINetworkConnectionPolicy>;

  contacts(): NSSet;

  addContact(contact: MIDINetworkHost): boolean;

  removeContact(contact: MIDINetworkHost): boolean;

  connections(): NSSet;

  addConnection(connection: MIDINetworkConnection): boolean;

  removeConnection(connection: MIDINetworkConnection): boolean;

  sourceEndpoint(): number;

  destinationEndpoint(): number;
}

declare class MIDINetworkConnection extends NSObject {
  static connectionWithHost<This extends abstract new (...args: any) => any>(this: This, host: MIDINetworkHost): InstanceType<This>;

  readonly host: MIDINetworkHost;
}

declare class MIDINetworkHost extends NSObject {
  static hostWithNameAddressPort<This extends abstract new (...args: any) => any>(this: This, name: string, address: string, port: number): InstanceType<This>;

  static hostWithNameNetService<This extends abstract new (...args: any) => any>(this: This, name: string, netService: NSNetService): InstanceType<This>;

  static hostWithNameNetServiceNameNetServiceDomain<This extends abstract new (...args: any) => any>(this: This, name: string, netServiceName: string, netServiceDomain: string): InstanceType<This>;

  hasSameAddressAs(other: MIDINetworkHost): boolean;

  readonly name: string;

  readonly address: string;

  readonly port: number;

  readonly netServiceName: string;

  readonly netServiceDomain: string;
}

declare class MIDICIProfileState extends NSObject implements NSSecureCoding {
  readonly midiChannel: number;

  readonly enabledProfiles: NSArray;

  readonly disabledProfiles: NSArray;

  initWithChannelEnabledProfilesDisabledProfiles(midiChannelNum: number, enabled: NSArray<interop.Object> | Array<interop.Object>, disabled: NSArray<interop.Object> | Array<interop.Object>): this;

  initWithEnabledProfilesDisabledProfiles(enabled: NSArray<interop.Object> | Array<interop.Object>, disabled: NSArray<interop.Object> | Array<interop.Object>): this;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

declare class MIDICIProfile extends NSObject implements NSSecureCoding {
  readonly name: string;

  readonly profileID: NSData;

  initWithData(data: NSData): this;

  initWithDataName(data: NSData, inName: string): this;

  static readonly supportsSecureCoding: boolean;

  encodeWithCoder(coder: NSCoder): void;

  initWithCoder(coder: NSCoder): this;
}

