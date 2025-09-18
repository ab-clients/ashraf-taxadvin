export interface ServiceSection {
  heading: string;
  body: string;
}

export interface ServiceDetail {
  slug: string; // for routing: /services/[slug]
  title: string;
  icon: React.ElementType; // react-icon component
  description: string; // one-liner from home page
  sections: ServiceSection[]; // sections with heading and body
}

export type ServicesData = {
  individualTrack: ServiceDetail[];
  businessTrack: ServiceDetail[];
};
