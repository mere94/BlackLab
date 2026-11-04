export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  details?: string;
}

export interface StepItem {
  number: string;
  label: string;
  title: string;
}

export interface GalleryItem {
  id: number;
  imageUrl: string;
  title: string;
  caption: string;
  alt?: string;
  span?: string;
}

export interface BusinessHours {
  day: string;
  hours: string;
  isClosed?: boolean;
}
