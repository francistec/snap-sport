export interface SportEvent {
  id: string;
  title: string;
  sport: string;
  date: string;
  location: string;
  coverImageKey: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Gallery {
  eventId: string;
  imageKeys: string[];
  totalImages: number;
}
