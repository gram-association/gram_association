export interface ImageType {
  [x: string]: any;
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface BaseMediaItem {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
}
export interface VideoItem {
  id: string;
  title: string;

  type: string;
  duration?: string;
  youtubeUrl: string;
}
export interface DocumentItem extends BaseMediaItem {
  type: "documents";
  hasQrCode?: boolean;
  fileSize?: string;
  fileType?: string;
  fileUrl?: string | undefined;
}
