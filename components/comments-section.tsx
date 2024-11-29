'use client';

import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import type { Comment } from '@/lib/types';

const DEMO_COMMENTS: Comment[] = [
  {
    id: '1',
    user: 'John Doe',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    content: 'This is a great video! Very informative and well-presented.',
    timestamp: '2 days ago',
    likes: 124,
  },
  {
    id: '2',
    user: 'Jane Smith',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane',
    content: 'Thanks for sharing this. I learned a lot!',
    timestamp: '1 day ago',
    likes: 89,
  },
];

export function CommentsSection() {
  const [comments, setComments] = useState<Comment[]>(DEMO_COMMENTS);
  const [newComment, setNewComment] = useState('');

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now().toString(),
      user: 'Current User',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=current',
      content: newComment,
      timestamp: 'Just now',
      likes: 0,
    };

    setComments([comment, ...comments]);
    setNewComment('');
  };

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-4">{comments.length} Comments</h2>
      
      <form onSubmit={handleSubmitComment} className="mb-6">
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=current" />
            <AvatarFallback>CU</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="min-h-[80px]"
            />
            <div className="flex justify-end gap-2 mt-2">
              <Button type="button" variant="ghost" onClick={() => setNewComment('')}>
                Cancel
              </Button>
              <Button type="submit" disabled={!newComment.trim()}>
                Comment
              </Button>
            </div>
          </div>
        </div>
      </form>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <Avatar>
              <AvatarImage src={comment.avatar} />
              <AvatarFallback>{comment.user[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-semibold">{comment.user}</span>
                <span className="text-sm text-muted-foreground">{comment.timestamp}</span>
              </div>
              <p className="mt-1">{comment.content}</p>
              <div className="flex items-center gap-4 mt-2">
                <Button variant="ghost" size="sm">
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  {comment.likes}
                </Button>
                <Button variant="ghost" size="sm">
                  <ThumbsDown className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">Reply</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}