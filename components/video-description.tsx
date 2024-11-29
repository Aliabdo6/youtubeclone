import { Video } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { ThumbsUp, ThumbsDown, Share2, Save } from 'lucide-react';

export function VideoDescription({ video }: { video: Video }) {
  return (
    <div className="mt-4">
      <h1 className="text-xl font-bold">{video.title}</h1>
      <div className="flex flex-wrap items-center justify-between gap-4 mt-2">
        <div>
          <p className="font-semibold">{video.channel_name}</p>
          <p className="text-sm text-muted-foreground">
            {video.views} • {video.upload_date}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            <ThumbsUp className="h-4 w-4 mr-2" />
            Like
          </Button>
          <Button variant="ghost" size="sm">
            <ThumbsDown className="h-4 w-4 mr-2" />
            Dislike
          </Button>
          <Button variant="ghost" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button variant="ghost" size="sm">
            <Save className="h-4 w-4 mr-2" />
            Save
          </Button>
        </div>
      </div>
      <p className="mt-4 text-sm whitespace-pre-wrap">{video.description}</p>
    </div>
  );
}