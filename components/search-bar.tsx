'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-4">
      <div className="flex items-center">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
          className="rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0"
        />
        <Button type="submit" className="rounded-l-none h-10" variant="secondary">
          <Search className="h-5 w-5" />
        </Button>
      </div>
    </form>
  );
}