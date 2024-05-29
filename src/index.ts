import { NativeEventEmitter, NativeModules } from 'react-native';

type IncomingCallType = {
  display(uuid: string, name: string, avatar: string | null, timeout?: number): void;
  dismiss(): void;
  backToForeground(): void;
  openAppFromHeadlessMode(uuid: string): void;
  getExtrasFromHeadlessMode(promise: Promise<any>): void;
};

const IncomingCall = NativeModules.IncomingCall as IncomingCallType;
const incomingCallEmitter = new NativeEventEmitter(NativeModules.IncomingCall);

export { IncomingCall, incomingCallEmitter };

export enum IncomingCallEvents {
  AnswerCall = 'AnswerCall',
  EndCall = 'EndCall',
  ErrorAcceptCall = 'ErrorAcceptCall',
}
