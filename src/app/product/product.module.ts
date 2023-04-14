import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// khi có sự dụng đến Router trong module con phải chèn vào RouterModule mới hoạt động dc
import { RouterModule, Routes } from '@angular/router';


import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { ProductComponent } from './product.component';
import { ProductDetailComponent } from './product_detail/product_detail.component';
import { ProductKindComponent } from './product_kind/product_kind.component';

import { ProductRoutingModule } from './product-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ProductRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [ProductComponent, ProductDetailComponent, ProductKindComponent]
})
export class ProductModule { }

// đa ngôn ngữ phần thứ ba
// còn phần thứ tư sẽ thiệt lập bên file chuyên đổi ngôn ngữ  (language.component.ts)
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}