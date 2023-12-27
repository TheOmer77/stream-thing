import { createContext } from 'react';
import type { ReceivedChatMessage } from '@livekit/components-react';

export type StreamContextValue = {
  hostId: string;
  hostName: string;
  viewerName: string;
  isChatDelayed: boolean;
  isChatEnabled: boolean;
  isChatEnabledOffline: boolean;
  isChatFollowersOnly: boolean;
  isFollowing: boolean;
  isOnline: boolean;
  chatMessages: ReceivedChatMessage[];
};

const initialState: StreamContextValue = {
  hostId: '',
  hostName: '',
  viewerName: '',
  isChatDelayed: false,
  isChatEnabled: false,
  isChatEnabledOffline: false,
  isChatFollowersOnly: false,
  isFollowing: false,
  isOnline: false,
  chatMessages: [],
};

export const StreamContext = createContext<StreamContextValue>(initialState);
