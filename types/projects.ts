export interface PageObject {
  slug: {
    slug: string;
  };
}

export interface ProjectImages {
  image: string;
  image_height: string;
}
export interface Details {
  key: string;
  value: string;
}

export interface ProjectsValues {
  title: string;
  sub_title: string;
  slug: string;
  featured_image: string;
  _type: string;
  project_images: ProjectImages[];
  details:  Details[]
}