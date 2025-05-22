export interface SliderArrayValues {
  title: string;
  link: string;
  image: string;
  body: Array<{
    _type: string;
    style?: string;
    children?: Array<{
      _type: string;
      text?: string;
    }>;
  }>;
}

export interface SliderValues {
  slider_items: SliderArrayValues[]
}