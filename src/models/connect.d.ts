// model state 类型
import { Location } from 'umi';
import { UserModelState } from './user';

export interface ConnectState {
  user: UserModelState;
}

export interface ConnectProps {
  location: Location & { state: { from: string } };
}

export { UserModelState };
