export interface Category {
  _id: number;
  image: any;
  name: string;
}

export interface FeaturedCategory {
  _id: number;
  name: string;
  short_descr: string;
}

export interface Restaurant {
  _id: number;
  image: string;
  name: string;
  short_descr: string;
  address: string;
  rating: number;
  type: {
    name: string;
  };
  dishes: Array<any>;
  long: string;
  lat: string;
}