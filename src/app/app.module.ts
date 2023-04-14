import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// đa ngôn ngữ gồm phần như sau ============================================
// đa ngôn ngữ phần thứ nhất phải cài thêm 2 hai phần dưới trong npm install
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';

import { MenuComponent } from './menu/menu.component';
import { LanguagesComponent } from './menu/languages/languages.component';


import { BasicModule } from './basic/basic.module';
import { ProductModule } from './product/product.module';
import  { ShareModule} from './share/share.module';
// import { LocalizationService } from './service/translation.service-sss';

// import { ProductComponent } from './product/product.component';
// import { ProductDetailComponent } from './product/product_detail/product_detail.component';

import { StateService } from './service/state.service';

@NgModule({
  declarations: [
    AppComponent, 
    MenuComponent, 
    LanguagesComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ShareModule,
    HttpClientModule,
    NgZorroAntdMobileModule,
    BasicModule,
    ProductModule,
    AppRoutingModule, // appRouting phai import sau cac module khac
    // đa ngôn ngữ phần thứ hai =======
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  // providers: [LocalizationService],
  providers: [StateService],
  bootstrap: [AppComponent],
})
export class AppModule {}

// đa ngôn ngữ phần thứ ba
// còn phần thứ tư sẽ thiệt lập bên file chuyên đổi ngôn ngữ  (language.component.ts)
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}