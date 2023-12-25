'use client';

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useTransition,
  type FormEventHandler,
} from 'react';
import {
  useChat,
  useConnectionState,
  useRemoteParticipant,
} from '@livekit/components-react';
import { ConnectionState } from 'livekit-client';
import { useMediaQuery } from 'usehooks-ts';

import { StreamChatHeader, StreamChatHeaderSkeleton } from './StreamChatHeader';
import { StreamChatInput } from './StreamChatInput';
import { StreamChatMessages } from './StreamChatMessages';
import { useChatSidebar } from '@/store/useChatSidebar';
import { Card } from '@/components/ui/Card';

export type StreamChatProps = {
  viewerName: string;
  hostName: string;
  hostId: string;
  isFollowing: boolean;
  isChatEnabled: boolean;
  isChatDelayed: boolean;
  isChatFollowersOnly: boolean;
};

export const StreamChat = ({
  viewerName,
  hostName,
  hostId,
  isFollowing,
  isChatEnabled,
  isChatDelayed,
  isChatFollowersOnly,
}: StreamChatProps) => {
  const matchesLg = useMediaQuery('(min-width: 1024px)');
  const { variant, setCollapsed } = useChatSidebar();
  const connectionState = useConnectionState();
  const participant = useRemoteParticipant(hostId);

  const isOnline =
    !!participant && connectionState === ConnectionState.Connected;

  useEffect(() => {
    if (!matchesLg) setCollapsed(false);
  }, [matchesLg, setCollapsed]);

  return (
    <Card className='flex h-[calc(100vh-6rem)] max-h-[calc(100vh-6rem)] flex-col gap-2 p-2'>
      <StreamChatHeader />
      {variant === 'community' ? (
        <p className='text-sm text-muted-foreground'>Community TBD</p>
      ) : (
        <>
          <StreamChatMessages
            isChatEnabled={isChatEnabled}
            isOnline={isOnline}
          />
          <StreamChatInput
            isOnline={isOnline}
            isChatEnabled={isChatEnabled}
            isFollowersOnly={isChatFollowersOnly}
            isDelayed={isChatDelayed}
            isFollowing={isFollowing}
          />
        </>
      )}
    </Card>
  );
};
