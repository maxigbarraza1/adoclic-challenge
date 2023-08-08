import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalConstants } from './core/utils/global-constants';
import { AUTH_API_PROVIDER } from './domain/auth/infrastructure/providers/auth-api.provider';
import { PRODUCT_API_PROVIDER } from './domain/products/infrastructure/providers/products-api.provider';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [PRODUCT_API_PROVIDER, AUTH_API_PROVIDER, GlobalConstants],
  bootstrap: [AppComponent],
})
export class AppModule {}
