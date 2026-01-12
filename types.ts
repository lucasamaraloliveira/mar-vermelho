
export interface Cathedral {
  id: string;
  name: string;
  location: string;
  image: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export type ViewState = 'home' | 'whatsapp' | 'privacy' | 'terms';
