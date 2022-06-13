import { PartialUser, TUser } from './user';

export type TChannel = {
  id: number;
  channelName: string;
  explanation: string;
  createdUserId: PartialUser;
  members: Array<TUser>;
};
export type PartialChannel = Partial<TChannel>;
export type PartialChannelList = Array<TChannel>;
