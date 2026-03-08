
export enum VentureStatus {
  RUNNING = 'Running',
  COMPLETED = 'Completed'
}

export interface Feature {
  id: string;
  text: string;
}

export interface Venture {
  id: string;
  name: string;
  location: string;
  description: string;
  status: VentureStatus;
  features: string[];
  imageUrl: string;
  videoUrl?: string;
  price?: string;
  sqyds?: string;
  coordinates?: { lat: number; lng: number };
  districts?: string;
}
