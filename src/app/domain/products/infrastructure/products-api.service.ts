import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDomainRequestProduct } from '../domain/product.model';
import { IProductsApiService } from './products-api.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService implements IProductsApiService {
  API: string = 'https://fakestoreapi.com';

  constructor(private _httpClient: HttpClient) {}

  getProducts(limit?: number): Observable<IDomainRequestProduct[]> {
    let URL = `${this.API}/products`;
    if (limit) {
      URL = `${this.API}/products?limit=${limit}`;
    }
    return this._httpClient.get<IDomainRequestProduct[]>(URL);
  }

  getProductCategories(): Observable<string[]> {
    const URL = `${this.API}/products/categories`;
    return this._httpClient.get<string[]>(URL);
  }
}
