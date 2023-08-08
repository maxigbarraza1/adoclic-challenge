export interface IApiRequestProduct {
  readonly title: string;
  readonly description: string;
  readonly price: number;
  readonly image: string;
  readonly category: string;
}

export interface IDomainRequestProduct extends IApiRequestProduct {
  readonly id: string;
}
