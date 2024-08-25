'use client';

import { type ComponentPropsWithoutRef, type ReactNode } from 'react';
import { useIsClient } from 'usehooks-ts';

import { cn } from '@/lib/utils';

export type SidebarProps = ComponentPropsWithoutRef<'aside'> & {
  skeleton?: ReactNode;
};

export const Sidebar = ({
  skeleton = null,
  className,
  children,
  ...props
}: SidebarProps) => {
  const isClient = useIsClient();

  if (!isClient) return skeleton;

  return (
    <aside
      {...props}
      className={cn(
        `fixed start-0 z-20 flex h-full w-20 flex-col items-center gap-1 bg-card p-2 lg:w-80`,
        className
      )}
    >
      {children}
    </aside>
  );
};
