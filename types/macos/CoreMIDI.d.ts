/// <reference path="../../lib/types.d.ts" />
/// <reference path="./Runtime.d.ts" />

declare const MIDINetworkNotificationSessionDidChange: string;

declare const kMIDI1UPMaxSysexSize: number;

declare const kMIDIPropertyUMPCanTransmitGroupless: interop.Pointer;

declare const kMIDIPropertyProtocolID: interop.Pointer;

declare const kMIDIPropertyDisplayName: interop.Pointer;

declare const kMIDIPropertyIsEffectUnit: interop.Pointer;

declare const kMIDIPropertyIsDrumMachine: interop.Pointer;

declare const kMIDIPropertyPanDisruptsStereo: interop.Pointer;

declare const kMIDIPropertyTransmitsBankSelectMSB: interop.Pointer;

declare const kMIDIPropertyTransmitsNotes: interop.Pointer;

declare const kMIDIPropertyReceivesBankSelectLSB: interop.Pointer;

declare const kMIDIPropertyCanRoute: interop.Pointer;

declare const kMIDIPropertyUserPatchNameFile: interop.Pointer;

declare const kMIDIPropertyFactoryPatchNameFile: interop.Pointer;

declare const kMIDIPropertyDriverOwner: interop.Pointer;

declare const kMIDIPropertyPrivate: interop.Pointer;

declare const kMIDIPropertyOffline: interop.Pointer;

declare const kMIDIPropertyConnectionUniqueID: interop.Pointer;

declare const kMIDIPropertySingleRealtimeEntity: interop.Pointer;

declare const kMIDIPropertyIsBroadcast: interop.Pointer;

declare const kMIDIPropertyAdvanceScheduleTimeMuSec: interop.Pointer;

declare const kMIDIPropertyTransmitChannels: interop.Pointer;

declare const kMIDIPropertyReceiveChannels: interop.Pointer;

declare const kMIDIPropertyDeviceID: interop.Pointer;

declare const kMIDIPropertyUniqueID: interop.Pointer;

declare const kMIDIInvalidUniqueID: number;

declare const kMIDIUnknownError: number;

declare const kMIDISetupFormatErr: number;

declare const kMIDIMessageSendErr: number;

declare const kMIDIUnknownProperty: number;

declare const kMIDINoConnection: number;

declare const kMIDIWrongEndpointType: number;

declare const kMIDIPropertyTransmitsClock: interop.Pointer;

declare const kMIDIServerStartErr: number;

declare const kMIDIPropertyReceivesBankSelectMSB: interop.Pointer;

declare const MIDIChannelsWholePort: number;

declare const kMIDIPropertyIsSampler: interop.Pointer;

declare const kMIDIPropertyReceivesMTC: interop.Pointer;

declare const kMIDIPropertyTransmitsMTC: interop.Pointer;

declare const kMIDIPropertyManufacturer: interop.Pointer;

declare const kMIDIPropertyReceivesProgramChanges: interop.Pointer;

declare const kMIDIPropertyTransmitsBankSelectLSB: interop.Pointer;

declare const kMIDIInvalidPort: number;

declare const kMIDINotPermitted: number;

declare const kMIDIDriverPropertyUsesSerial: interop.Pointer;

declare const kMIDIPropertyMaxReceiveChannels: interop.Pointer;

declare const kMIDIPropertyReceivesClock: interop.Pointer;

declare const kMIDIPropertyNameConfigurationDictionary: interop.Pointer;

declare const kMIDIPropertyReceivesNotes: interop.Pointer;

declare const kMIDIUnknownEndpoint: number;

declare const kMIDIObjectType_ExternalMask: interop.Enum<typeof MIDIObjectType>;

declare const kMIDIPropertyName: interop.Pointer;

declare const kMIDIPropertyDriverVersion: interop.Pointer;

declare const kMIDIPropertyMaxSysExSpeed: interop.Pointer;

declare const kMIDIPropertyIsMixer: interop.Pointer;

declare const kMIDIIDNotUnique: number;

declare const kMIDIPropertyIsEmbeddedEntity: interop.Pointer;

declare const kMIDIWrongThread: number;

declare const kMIDINoCurrentSetup: number;

declare const kMIDIWrongPropertyType: number;

declare const kMIDIPropertyMaxTransmitChannels: interop.Pointer;

declare const kMIDIPropertyImage: interop.Pointer;

declare const kMIDIObjectNotFound: number;

declare const MIDINetworkNotificationContactsDidChange: string;

declare const MIDINetworkBonjourServiceType: string;

declare const kMIDIPropertySupportsMMC: interop.Pointer;

declare const kMIDIPropertyNameConfiguration: interop.Pointer;

declare const kMIDIPropertySupportsShowControl: interop.Pointer;

declare const kMIDIInvalidClient: number;

declare const kMIDIPropertyTransmitsProgramChanges: interop.Pointer;

declare const kMIDIPropertyDriverDeviceEditorApp: interop.Pointer;

declare const kMIDIPropertySupportsGeneralMIDI: interop.Pointer;

declare const kMIDIPropertyModel: interop.Pointer;

declare const kMIDIThruConnection_MaxEndpoints: number;

declare const kMIDIPropertyUMPActiveGroupBitmap: interop.Pointer;

declare const MIDINetworkConnectionPolicy: {
  NoOne: 0,
  HostsInContactList: 1,
  Anyone: 2,
};

declare const MIDIProgramChangeOptions: {
  kMIDIProgramChangeBankValid: 1,
};

declare const MIDINoteAttribute: {
  None: 0,
  ManufacturerSpecific: 1,
  ProfileSpecific: 2,
  Pitch: 3,
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

declare const MIDIMessageType: {
  Utility: 0,
  System: 1,
  ChannelVoice1: 2,
  SysEx: 3,
  ChannelVoice2: 4,
  Data128: 5,
  UnknownF: 15,
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

declare const MIDIPerNoteManagementOptions: {
  Reset: 1,
  Detach: 2,
};

declare const MIDISysExStatus: {
  Complete: 0,
  Start: 1,
  Continue: 2,
  End: 3,
  MixedDataSetHeader: 8,
  MixedDataSetPayload: 9,
};

declare const MIDIProtocolID: {
  Protocol_1_0: 1,
  Protocol_2_0: 2,
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

declare const MIDINotificationMessageID: {
  SetupChanged: 1,
  ObjectAdded: 2,
  ObjectRemoved: 3,
  PropertyChanged: 4,
  ThruConnectionsChanged: 5,
  SerialPortOwnerChanged: 6,
  IOError: 7,
};

declare const MIDIUtilityStatus: {
  NOOP: 0,
  JitterReductionClock: 1,
  JitterReductionTimestamp: 2,
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

declare const MIDITransformControlType: {
  Type_7Bit: 0,
  Type_14Bit: 1,
  Type_7BitRPN: 2,
  Type_14BitRPN: 3,
  Type_7BitNRPN: 4,
  Type_14BitNRPN: 5,
};

declare class unnamed_8432691317143512352 {
  constructor(init?: unnamed_8432691317143512352);
  status: interop.Enum<typeof MIDISysExStatus>;
  channel: number;
  data: unknown /* const array */;
  reserved: number;
}

declare class MIDICIDeviceIdentification {
  constructor(init?: MIDICIDeviceIdentification);
  manufacturer: unknown /* const array */;
  family: unknown /* const array */;
  modelNumber: unknown /* const array */;
  revisionLevel: unknown /* const array */;
  reserved: unknown /* const array */;
}

declare class unnamed_9320766958378276041 {
  constructor(init?: unnamed_9320766958378276041);
  mdsID: number;
  data: unknown /* const array */;
  reserved: number;
}

declare class unnamed_1328742274150891140 {
  constructor(init?: unnamed_1328742274150891140);
  noteNumber: number;
  reserved: number;
  bend: number;
}

declare class unnamed_17785823612730154719 {
  constructor(init?: unnamed_17785823612730154719);
  data: number;
  reserved: unknown /* const array */;
}

declare class unnamed_5407790611912463672 {
  constructor(init?: unnamed_5407790611912463672);
  options: interop.Enum<typeof MIDIProgramChangeOptions>;
  program: number;
  reserved: unknown /* const array */;
  bank: number;
}

declare class unnamed_3074618091859805475 {
  constructor(init?: unnamed_3074618091859805475);
  status: interop.Enum<typeof MIDICVStatus>;
  channel: number;
  reserved: unknown /* const array */;
}

declare class unnamed_17615608139582111408 {
  constructor(init?: unnamed_17615608139582111408);
  index: number;
  data: number;
}

declare class unnamed_3786751775245207680 {
  constructor(init?: unnamed_3786751775245207680);
  number: number;
  velocity: number;
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

declare class unnamed_11294647230000783866 {
  constructor(init?: unnamed_11294647230000783866);
  status: interop.Enum<typeof MIDICVStatus>;
  channel: number;
  reserved: unknown /* const array */;
}

declare class MIDIValueMap {
  constructor(init?: MIDIValueMap);
  value: unknown /* const array */;
}

declare class MIDIPacket {
  constructor(init?: MIDIPacket);
  timeStamp: number;
  length: number;
  data: unknown /* const array */;
}

declare class unnamed_12169064530629003102 {
  constructor(init?: unnamed_12169064530629003102);
  noteNumber: number;
  index: number;
  data: number;
}

declare class MIDIUniversalMessage {
  constructor(init?: MIDIUniversalMessage);
  type: interop.Enum<typeof MIDIMessageType>;
  group: number;
  reserved: unknown /* const array */;
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

declare class unnamed_8472781007454184014 {
  constructor(init?: unnamed_8472781007454184014);
  noteNumber: number;
  pressure: number;
}

declare class MIDIMessage_96 {
  constructor(init?: MIDIMessage_96);
  word0: number;
  word1: number;
  word2: number;
}

declare class unnamed_7706378057287129102 {
  constructor(init?: unnamed_7706378057287129102);
  byteCount: number;
  streamID: number;
  data: unknown /* const array */;
  reserved: number;
}

declare class unnamed_14553942404858959717 {
  constructor(init?: unnamed_14553942404858959717);
  number: number;
  attributeType: interop.Enum<typeof MIDINoteAttribute>;
  velocity: number;
  attribute: number;
}

declare class unnamed_8418358433317838535 {
  constructor(init?: unnamed_8418358433317838535);
  status: interop.Enum<typeof MIDIUtilityStatus>;
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

declare class unnamed_12796637781678551746 {
  constructor(init?: unnamed_12796637781678551746);
  bank: number;
  index: number;
  data: number;
}

declare class unnamed_14687387921441083041 {
  constructor(init?: unnamed_14687387921441083041);
  status: interop.Enum<typeof MIDISystemStatus>;
}

declare class unnamed_11581377245702835715 {
  constructor(init?: unnamed_11581377245702835715);
  note: number;
  options: interop.Enum<typeof MIDIPerNoteManagementOptions>;
  reserved: unknown /* const array */;
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

declare class unnamed_13810935525240157663 {
  constructor(init?: unnamed_13810935525240157663);
  status: interop.Enum<typeof MIDISysExStatus>;
}

declare class unnamed_13159909140468535313 {
  constructor(init?: unnamed_13159909140468535313);
  index: number;
  reserved: number;
  data: number;
}

declare class unnamed_14011109918113237124 {
  constructor(init?: unnamed_14011109918113237124);
  words: unknown /* const array */;
}

declare class MIDIControlTransform {
  constructor(init?: MIDIControlTransform);
  controlType: interop.Enum<typeof MIDITransformControlType>;
  remappedControlType: interop.Enum<typeof MIDITransformControlType>;
  controlNumber: number;
  transform: interop.Enum<typeof MIDITransformType>;
  param: number;
}

declare class MIDIIOErrorNotification {
  constructor(init?: MIDIIOErrorNotification);
  messageID: interop.Enum<typeof MIDINotificationMessageID>;
  messageSize: number;
  driverDevice: number;
  errorCode: number;
}

declare class unnamed_18010096183987042258 {
  constructor(init?: unnamed_18010096183987042258);
  data: number;
  reserved: unknown /* const array */;
}

declare class MIDIMessage_128 {
  constructor(init?: MIDIMessage_128);
  word0: number;
  word1: number;
  word2: number;
  word3: number;
}

declare class MIDIThruConnectionEndpoint {
  constructor(init?: MIDIThruConnectionEndpoint);
  endpointRef: number;
  uniqueID: number;
}

declare class MIDINotification {
  constructor(init?: MIDINotification);
  messageID: interop.Enum<typeof MIDINotificationMessageID>;
  messageSize: number;
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

declare class MIDITransform {
  constructor(init?: MIDITransform);
  transform: interop.Enum<typeof MIDITransformType>;
  param: number;
}

declare class unnamed_15721807378610160491 {
  constructor(init?: unnamed_15721807378610160491);
  noteNumber: number;
  reserved: number;
  pressure: number;
}

type unnamed_157621592813358894Descriptor = 
  | { sysex8: unnamed_7706378057287129102 }
  | { mixedDataSet: unnamed_9320766958378276041 };

declare class unnamed_157621592813358894 {
  constructor(init?: unnamed_157621592813358894Descriptor);
  sysex8: unnamed_7706378057287129102;
  mixedDataSet: unnamed_9320766958378276041;
}

type unnamed_5533796734437488337Descriptor = 
  | { jitterReductionClock: number }
  | { jitterReductionTimestamp: number };

declare class unnamed_5533796734437488337 {
  constructor(init?: unnamed_5533796734437488337Descriptor);
  jitterReductionClock: number;
  jitterReductionTimestamp: number;
}

type unnamed_1599949103602192351Descriptor = 
  | { note: unnamed_3786751775245207680 }
  | { polyPressure: unnamed_8472781007454184014 }
  | { controlChange: unnamed_17615608139582111408 }
  | { program: number }
  | { channelPressure: number }
  | { pitchBend: number };

declare class unnamed_1599949103602192351 {
  constructor(init?: unnamed_1599949103602192351Descriptor);
  note: unnamed_3786751775245207680;
  polyPressure: unnamed_8472781007454184014;
  controlChange: unnamed_17615608139582111408;
  program: number;
  channelPressure: number;
  pitchBend: number;
}

type unnamed_140910638533899429Descriptor = 
  | { note: unnamed_14553942404858959717 }
  | { polyPressure: unnamed_15721807378610160491 }
  | { controlChange: unnamed_13159909140468535313 }
  | { programChange: unnamed_5407790611912463672 }
  | { channelPressure: unnamed_17785823612730154719 }
  | { pitchBend: unnamed_18010096183987042258 }
  | { perNoteController: unnamed_12169064530629003102 }
  | { controller: unnamed_12796637781678551746 }
  | { perNotePitchBend: unnamed_1328742274150891140 }
  | { perNoteManagement: unnamed_11581377245702835715 };

declare class unnamed_140910638533899429 {
  constructor(init?: unnamed_140910638533899429Descriptor);
  note: unnamed_14553942404858959717;
  polyPressure: unnamed_15721807378610160491;
  controlChange: unnamed_13159909140468535313;
  programChange: unnamed_5407790611912463672;
  channelPressure: unnamed_17785823612730154719;
  pitchBend: unnamed_18010096183987042258;
  perNoteController: unnamed_12169064530629003102;
  controller: unnamed_12796637781678551746;
  perNotePitchBend: unnamed_1328742274150891140;
  perNoteManagement: unnamed_11581377245702835715;
}

type unnamed_12440347092911263717Descriptor = 
  | { utility: unnamed_8418358433317838535 }
  | { system: unnamed_14687387921441083041 }
  | { channelVoice1: unnamed_11294647230000783866 }
  | { sysEx: unnamed_8432691317143512352 }
  | { channelVoice2: unnamed_3074618091859805475 }
  | { data128: unnamed_13810935525240157663 }
  | { unknown: unnamed_14011109918113237124 };

declare class unnamed_12440347092911263717 {
  constructor(init?: unnamed_12440347092911263717Descriptor);
  utility: unnamed_8418358433317838535;
  system: unnamed_14687387921441083041;
  channelVoice1: unnamed_11294647230000783866;
  sysEx: unnamed_8432691317143512352;
  channelVoice2: unnamed_3074618091859805475;
  data128: unnamed_13810935525240157663;
  unknown: unnamed_14011109918113237124;
}

type unnamed_14363979365680040868Descriptor = 
  | { timeCode: number }
  | { songPositionPointer: number }
  | { songSelect: number };

declare class unnamed_14363979365680040868 {
  constructor(init?: unnamed_14363979365680040868Descriptor);
  timeCode: number;
  songPositionPointer: number;
  songSelect: number;
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

declare function MIDISetupCreate(outSetup: interop.PointerConvertible): number;

declare function MIDISetupDispose(setup: number): number;

declare function MIDISetupInstall(setup: number): number;

declare function MIDISetupGetCurrent(outSetup: interop.PointerConvertible): number;

declare function MIDISetupToData(setup: number, outData: interop.PointerConvertible): number;

declare function MIDISetupFromData(data: interop.PointerConvertible, outSetup: interop.PointerConvertible): number;

declare function MIDIDeviceNewEntity(device: number, name: interop.PointerConvertible, protocol: interop.Enum<typeof MIDIProtocolID>, embedded: number, numSourceEndpoints: number, numDestinationEndpoints: number, newEntity: interop.PointerConvertible): number;

declare function MIDIDeviceAddEntity(device: number, name: interop.PointerConvertible, embedded: number, numSourceEndpoints: number, numDestinationEndpoints: number, newEntity: interop.PointerConvertible): number;

declare function MIDIDeviceRemoveEntity(device: number, entity: number): number;

declare function MIDIEntityAddOrRemoveEndpoints(entity: number, numSourceEndpoints: number, numDestinationEndpoints: number): number;

declare function MIDISetupAddDevice(device: number): number;

declare function MIDISetupRemoveDevice(device: number): number;

declare function MIDISetupAddExternalDevice(device: number): number;

declare function MIDISetupRemoveExternalDevice(device: number): number;

declare function MIDIGetSerialPortOwner(portName: interop.PointerConvertible, outDriverName: interop.PointerConvertible): number;

declare function MIDISetSerialPortOwner(portName: interop.PointerConvertible, driverName: interop.PointerConvertible): number;

declare function MIDIGetSerialPortDrivers(outDriverNames: interop.PointerConvertible): number;

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

declare function MIDIDriverEnableMonitoring(driver: interop.PointerConvertible, enabled: number): number;

declare function MIDIEventListForEachEvent(evtlist: interop.PointerConvertible, visitor: (p1: interop.PointerConvertible, p2: number, p3: MIDIUniversalMessage) => void, visitorContext: interop.PointerConvertible): void;

declare function MIDIBluetoothDriverActivateAllConnections(): number;

declare function MIDIBluetoothDriverDisconnect(uuid: interop.PointerConvertible): number;

declare interface MIDICIProfileResponderDelegate extends NSObjectProtocol {
  connectInitiatorWithDeviceInfo(initiatorMUID: NSNumber, deviceInfo: MIDICIDeviceInfo): boolean;

  initiatorDisconnected(initiatorMUID: NSNumber): void;

  willSetProfileOnChannelEnabled?(aProfile: MIDICIProfile, channel: number, shouldEnable: boolean): boolean;

  handleDataForProfileOnChannelData?(aProfile: MIDICIProfile, channel: number, inData: NSData): void;
}

declare class MIDICIProfileResponderDelegate extends NativeObject implements MIDICIProfileResponderDelegate {
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

declare class MIDICIDiscoveryManager extends NSObject {
  static sharedInstance(): MIDICIDiscoveryManager;

  discoverWithHandler(completedHandler: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void;
}

