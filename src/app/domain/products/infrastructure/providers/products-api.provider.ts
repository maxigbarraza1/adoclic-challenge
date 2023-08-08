import { InjectionToken, Provider } from '@angular/core';
import { IProductsApiService } from '../products-api.interface';
import { ProductsApiService } from '../products-api.service';

export const HTTP_PRODUCTS_SERVICE = new InjectionToken<IProductsApiService>(
  'ProductsApiService'
);

export const PRODUCT_API_PROVIDER: Provider = {
  provide: HTTP_PRODUCTS_SERVICE,
  useClass: ProductsApiService,
};
