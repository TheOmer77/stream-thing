'use client';

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from 'react';
import {
  Slider as SliderRoot,
  SliderRange,
  SliderThumb,
  SliderTrack,
} from '@radix-ui/react-slider';

import { cn } from '@/lib/utils';

export const Slider = forwardRef<
  ElementRef<typeof SliderRoot>,
  ComponentPropsWithoutRef<typeof SliderRoot>
>(({ className, ...props }, ref) => (
  <SliderRoot
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center',
      className
    )}
    {...props}
  >
    <SliderTrack
      className='relative h-2 w-full grow overflow-hidden
rounded-full bg-secondary'
    >
      <SliderRange className='absolute h-full bg-primary' />
    </SliderTrack>
    <SliderThumb
      className='block h-5 w-5 rounded-full border-2 border-primary
bg-background ring-offset-background transition-colors
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
    />
  </SliderRoot>
));
Slider.displayName = SliderRoot.displayName;
