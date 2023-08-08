export interface IDomainProduct {
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface IDomainRequestProduct extends IDomainProduct {
  id: string;
}
