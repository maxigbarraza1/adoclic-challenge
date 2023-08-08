import { Observable } from 'rxjs';
import { IDomainRequestProduct } from '../domain/product.model';

export interface IProductsApiService {
  getProducts(limit?: number): Observable<IDomainRequestProduct[]>;
  getProductCategories(): Observable<string[]>;
}
