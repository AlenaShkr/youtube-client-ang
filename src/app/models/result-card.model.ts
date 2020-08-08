interface ThumbnailsSize {
  url: string;
  width: string;
  height: string;
}

interface Thumbnails {
  default: ThumbnailsSize;
  medium: ThumbnailsSize;
  high: ThumbnailsSize;
  standard: ThumbnailsSize;
  maxres: ThumbnailsSize;
}

interface Snippet {
  publishedAt: string;
  title: string;
  description: string ;
  thumbnails: Thumbnails;
}

interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  commentCount: string;
}

export interface ResultCard {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: Statistics;

}
