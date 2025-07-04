export interface ImageType {
  id: string;
  src: string;
  alt: string;
  description: string;
}

interface BaseMediaItem {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
}
export interface VideoItem extends BaseMediaItem {
  type: "videos";
  duration?: string;
  youtubeUrl: string;
}
export interface DocumentItem extends BaseMediaItem {
  type: "documents";
  hasQrCode?: boolean;
  fileSize?: string;
  fileType?: string;
}
