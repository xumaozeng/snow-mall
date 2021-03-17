// model state 类型
import { Location, Dispatch } from 'umi';
import { UserModelState } from './user';

export interface ConnectState {
  user: UserModelState;
}

export interface ConnectProps {
  location: Location & { state: { from: string } };
  dispatch: Dispatch;
}

export { UserModelState };
