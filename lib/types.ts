export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Video {
  id: string;
  title: string;
  views: string;
  duration: string;
  upload_date: string;
  channel_name: string;
  description: string;
  link: string;
  category: string;
  thumbnails: Thumbnail[];
  poster: string;
}

export interface Comment {
  id: string;
  user: string;
  avatar: string;
  content: string;
  timestamp: string;
  likes: number;
}