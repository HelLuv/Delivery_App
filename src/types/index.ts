export interface Category {
  _id: number;
  image: any;
  name: string;
}

export interface FeaturedCategory {
  _id: number;
  name: string;
  short_description: string;
}

export interface Restaurant {
  _id: number;
  image: string;
  name: string;
  short_description: string;
  address: string;
  rating: number;
  type: {
    name: string;
  };
  dishes: Array<Dish>;
  long: string;
  lat: string;
}

export interface Dish {
  _id: number;
  name: string;
  short_description: string;
  price: number;
  image: string;
}