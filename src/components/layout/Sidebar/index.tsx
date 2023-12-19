import { CollapseToggle } from './CollapseToggle';
import { Recommended, RecommendedSkeleton } from './Recommended';
import { SidebarWrapper } from './SidebarWrapper';
import { getRecommended } from '@/services/recommended';

export const Sidebar = async () => {
  const recommended = await getRecommended();

  return (
    <SidebarWrapper>
      <CollapseToggle />
      <Recommended data={recommended} />
    </SidebarWrapper>
  );
};

export const SidebarSkeleton = () => (
  <aside
    className='fixed start-0 z-20 flex h-full w-20 flex-col items-center gap-1
border-e bg-background p-2 shadow lg:w-80'
  >
    <RecommendedSkeleton />
  </aside>
);
