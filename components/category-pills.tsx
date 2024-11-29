'use client';

import { useState, useEffect } from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { videos } from '@/lib/data';

export function CategoryPills({ onSelectCategory }: { onSelectCategory: (category: string) => void }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState<string[]>(['All']);

  useEffect(() => {
    const uniqueCategories = ['All', ...new Set(videos.map(video => video.category))];
    setCategories(uniqueCategories);
  }, []);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant="secondary"
            className={cn(
              'rounded-full transition-colors',
              selectedCategory === category && 'bg-primary text-primary-foreground hover:bg-primary/90'
            )}
            onClick={() => handleCategorySelect(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" className="invisible" />
    </ScrollArea>
  );
}