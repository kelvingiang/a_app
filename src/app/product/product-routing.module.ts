import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { ProductComponent } from './product.component';
import { ProductDetailComponent } from './product_detail/product_detail.component';
import { ProductKindComponent } from './product_kind/product_kind.component';

const routes: Routes = [
  // quy tắc đặt các router  theo thứ tự càng chi tiết ta đặt bên trên
  // riêng cái router 404 phải đặt sau cùng

  // chuyển đến trang mặc định khi mới vào ======
  // {path: '', redirectTo : '/member', pathMatch: 'full'},

  //  {path: 'product_kind/:kind', component: ProductKindComponent},
  // //  product_kind/en

  { path: 'product_detail/:id', component: ProductDetailComponent },
  { path: 'product_kind/:kind', component: ProductKindComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
