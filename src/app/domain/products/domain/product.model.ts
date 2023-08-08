export interface IDomainProduct {
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface IDomainRequestProduct extends IDomainProduct {
  id: number;
}

export interface IDomainProductCategories {
  categories: string[];
}
