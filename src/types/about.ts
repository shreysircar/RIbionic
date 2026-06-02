export interface AboutImage {
  id: string;
  title: string;
  imageUrl: string;
}

export interface AboutSection {
  heading: string;
  description: string;
  images: AboutImage[];
}