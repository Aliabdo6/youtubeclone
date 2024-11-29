'use client';

import { Home, Compass, Clock, ThumbsUp, PlaySquare, History, Film, Gamepad, Newspaper, Trophy, Flame, Music2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

const mainLinks = [
  { icon: Home, label: 'Home' },
  { icon: Compass, label: 'Explore' },
  { icon: PlaySquare, label: 'Subscriptions' },
];

const libraryLinks = [
  { icon: Clock, label: 'Watch Later' },
  { icon: ThumbsUp, label: 'Liked Videos' },
  { icon: History, label: 'History' },
];

const exploreLinks = [
  { icon: Flame, label: 'Trending' },
  { icon: Music2, label: 'Music' },
  { icon: Film, label: 'Movies' },
  { icon: Gamepad, label: 'Gaming' },
  { icon: Newspaper, label: 'News' },
  { icon: Trophy, label: 'Sports' },
];

export function Sidebar() {
  return (
    <aside className="w-64 fixed left-0 top-16 bottom-0 bg-background border-r hidden md:block">
      <ScrollArea className="h-full py-4">
        <div className="px-2 space-y-4">
          <div className="space-y-1">
            {mainLinks.map((link) => (
              <SidebarLink key={link.label} icon={link.icon} label={link.label} />
            ))}
          </div>

          <div className="border-t pt-4">
            <h2 className="text-sm font-semibold px-3 mb-2">Library</h2>
            <div className="space-y-1">
              {libraryLinks.map((link) => (
                <SidebarLink key={link.label} icon={link.icon} label={link.label} />
              ))}
            </div>
          </div>

          <div className="border-t pt-4">
            <h2 className="text-sm font-semibold px-3 mb-2">Explore</h2>
            <div className="space-y-1">
              {exploreLinks.map((link) => (
                <SidebarLink key={link.label} icon={link.icon} label={link.label} />
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </aside>
  );
}

function SidebarLink({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <Button
      variant="ghost"
      className={cn(
        'w-full justify-start gap-3 font-normal hover:bg-accent/50',
      )}
    >
      <Icon className="h-5 w-5" />
      {label}
    </Button>
  );
}