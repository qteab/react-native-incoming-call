import { NativeEventEmitter, NativeModules } from 'react-native';

type IncomingCallType = {
  display(uuid: string, name: string, avatar: string | null, timeout?: number): void;
  dismiss(): void;
  backToForeground(): void;
  openAppFromHeadlessMode(uuid: string): void;
  getExtrasFromHeadlessMode(): Promise<any>;
};

const IncomingCall = NativeModules.IncomingCall as IncomingCallType;
const incomingCallEmitter = new NativeEventEmitter(NativeModules.IncomingCall);

export { IncomingCall, incomingCallEmitter };

export enum IncomingCallEvents {
  AnswerCall = 'AnswerCall',
  EndCall = 'EndCall',
  ErrorAcceptCall = 'ErrorAcceptCall',
}
