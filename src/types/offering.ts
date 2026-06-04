export interface OfferingImage {
  imageUrl: string;
  layout?: "image-left" | "image-right";
  caption?: string;
}

export interface OfferingSection {
  heading: string;
  paragraphs?: string[];
  bulletPoints?: string[];
  images?: OfferingImage[];
}

export interface Offering {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;

  sections: OfferingSection[];

  features: string[];
}