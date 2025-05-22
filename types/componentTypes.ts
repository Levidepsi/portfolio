

export interface FeaturedArticleItem {
  article_title: {
    date: string;
    title: string;
    featured_description: Array<{
    _type: string;
    style?: string;
    children?: Array<{
      _type: string;
      text?: string;
    }>;
  }>;
    featured_image: string;
    slug: string;
  };
}


export interface FeaturedArticleProps {
  featured_article_items: FeaturedArticleItem[];
}
