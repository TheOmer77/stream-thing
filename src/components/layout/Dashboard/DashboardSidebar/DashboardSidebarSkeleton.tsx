'use client';

import { AvatarSkeleton, Skeleton } from '@/components/ui/Skeleton';
import { SidebarSkeletonBase } from '@/components/layout/Sidebar';

export const DashboardSidebarSkeleton = () => (
  <SidebarSkeletonBase>
    <ul className='flex w-full grow flex-col gap-px lg:w-full'>
      {[...Array(4).keys()].map(key => (
        <li
          key={key}
          className='inline-flex h-16 flex-row items-center justify-start
gap-2 px-4 lg:h-10'
        >
          <AvatarSkeleton />
          <Skeleton className='hidden h-5 grow lg:block' />
        </li>
      ))}
    </ul>
  </SidebarSkeletonBase>
);
