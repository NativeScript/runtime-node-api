/// <reference types="@nativescript/objc-node-api" />

declare const SSLProtocol: {
  SSLProtocolUnknown: 0,
  TLSProtocol1: 4,
  TLSProtocol11: 7,
  TLSProtocol12: 8,
  DTLSProtocol1: 9,
  TLSProtocol13: 10,
  DTLSProtocol12: 11,
  TLSProtocolMaxSupported: 999,
  SSLProtocol2: 1,
  SSLProtocol3: 2,
  SSLProtocol3Only: 3,
  TLSProtocol1Only: 5,
  SSLProtocolAll: 6,
};

declare const tls_protocol_version_t: {
  TLSv10: 769,
  TLSv11: 770,
  TLSv12: 771,
  TLSv13: 772,
  DTLSv10: -257,
  DTLSv12: -259,
};

declare class __SecTrust {
  constructor(init?: __SecTrust);
}

declare class __SecIdentity {
  constructor(init?: __SecIdentity);
}

