'use client';

import { Video } from '@/lib/types';

export function VideoPlayer({ video }: { video: Video }) {
  const videoId = video.link.split('v=')[1];
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="aspect-video relative rounded-lg overflow-hidden bg-black">
      <iframe
        src={embedUrl}
        className="absolute inset-0 w-full h-full"
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title={video.title}
      />
    </div>
  );
}