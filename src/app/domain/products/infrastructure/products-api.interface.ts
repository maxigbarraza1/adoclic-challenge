import { Observable } from 'rxjs';
import { IDomainRequestProduct } from '../domain/product.model';

export interface IProductsApiService {
  getProducts(): Observable<IDomainRequestProduct[]>;
}
