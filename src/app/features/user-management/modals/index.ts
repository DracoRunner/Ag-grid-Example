export interface User {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface UserResponse {
  limit: number;
  products: User[];
  skip: number;
  total: number;
}
