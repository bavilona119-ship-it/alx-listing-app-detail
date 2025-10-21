// interfaces/index.ts
export interface AddressProps {
  city: string;
  country: string;
}

export interface ReviewProps {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}

export interface PropertyProps {
  name: string;
  rating: number;
  address: AddressProps;
  image: string;
  description: string;
  category: string[];
  price: number;
  reviews: ReviewProps[];
}
