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

  getProducts(): Observable<IDomainRequestProduct[]> {
    return this._httpClient.get<IDomainRequestProduct[]>(
      `${this.API}/products`
    );
  }
}
