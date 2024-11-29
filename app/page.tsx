'use client';

import { useState } from 'react';
import { videos } from '@/lib/data';
import { VideoCard } from '@/components/video-card';
import { VideoGrid } from '@/components/video-grid';
import { CategoryPills } from '@/components/category-pills';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredVideos = selectedCategory === 'All'
    ? videos
    : videos.filter(video => video.category === selectedCategory);

  return (
    <div className="flex-1 h-full">
      <div className="fixed top-16 inset-x-0 bg-background z-10 md:ml-64 px-4">
        <div className="py-4">
          <CategoryPills onSelectCategory={setSelectedCategory} />
        </div>
      </div>
      <div className="mt-24 md:ml-64 px-4 pb-4">
        <VideoGrid>
          {filteredVideos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </VideoGrid>
      </div>
    </div>
  );
}