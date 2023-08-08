import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDomainRequestProduct } from '../domain/product.model';
import { IProductsApiService } from '../infrastructure/products-api.interface';
import { HTTP_PRODUCTS_SERVICE } from '../infrastructure/providers/products-api.provider';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(
    @Inject(HTTP_PRODUCTS_SERVICE)
    private _productApiService: IProductsApiService
  ) {}

  getProducts(limit?: number): Observable<IDomainRequestProduct[]> {
    return this._productApiService.getProducts(limit);
  }

  getProductCategories(): Observable<string[]> {
    return this._productApiService.getProductCategories();
  }
}
