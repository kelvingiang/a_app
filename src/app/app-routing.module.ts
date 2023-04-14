import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './basic/home/home.component';
import { AboutComponent } from './basic/about/about.component';
import { ContactComponent } from './basic/contact/contact.component'; 
import { MemberComponent } from './basic/member/member.component';
import { NotFoundComponent } from './basic/not-found/not-found.component';
import { ProductComponent } from './product/product.component';
// import { ProductDetailComponent } from './product/product_detail/product_detail.component';
// import { ProductKindComponent } from './product/product_kind/product_kind.component';

const routes: Routes = [
    // quy tắc đặt các router  theo thứ tự càng chi tiết ta đặt bên trên 
    // riêng cái router 404 phải đặt sau cùng

  // chuyển đến trang mặc định khi mới vào ====== 
 // {path: '', redirectTo : '/member', pathMatch: 'full'},

//  {path: 'product_detail/:id', component: ProductDetailComponent},
//  {path: 'product_kind/:kind', component: ProductKindComponent},
 // thêm tham số trên thanh URL
 {path: 'about', component: AboutComponent},
 {path: 'contact', component: ContactComponent},
 {path: 'member', component: MemberComponent},
 {path: 'product', component: ProductComponent},
 {path: '', component: HomeComponent},

  // trang 404
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
