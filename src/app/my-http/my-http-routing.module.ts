import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { ProductComponent } from './product.component';
import { MyHttpComponent } from './component/my-http.component';

const routes: Routes = [{ path: 'my-http', component: MyHttpComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyHttpRoutingModule {}
