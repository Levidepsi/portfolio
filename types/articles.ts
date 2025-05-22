export interface ArticlesList {
  _id: string;
  title: string;
  date: string;
  _createdAt: string;
  slug: string;
  featured_image: string;
  body: any;
  featured_description: any
}

export interface Post {
  _id: string;
  title: string;
  smallDescription: string;
  content: any;
  _createdAt: string;
  currentSlug: string;
  titleImage: any;
}