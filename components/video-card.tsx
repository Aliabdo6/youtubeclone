'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import type { Video } from '@/lib/types';

export function VideoCard({
  id,
  title,
  channel_name,
  views,
  upload_date,
  thumbnails,
  duration,
}: Video) {
  const router = useRouter();
  const thumbnail = thumbnails[thumbnails.length - 1];

  return (
    <Card 
      className="bg-background border-0 shadow-none cursor-pointer hover:bg-accent/50 transition-colors"
      onClick={() => router.push(`/watch/${id}`)}
    >
      <div className="aspect-video relative rounded-lg overflow-hidden">
        <Image
          src={thumbnail.url}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-sm px-2 py-1 rounded">
          {duration}
        </div>
      </div>
      <div className="mt-3">
        <h3 className="font-semibold line-clamp-2">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{channel_name}</p>
        <p className="text-sm text-muted-foreground">
          {views} • {upload_date}
        </p>
      </div>
    </Card>
  );
}