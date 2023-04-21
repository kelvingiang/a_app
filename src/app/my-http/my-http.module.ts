import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgZorroAntdMobileModule, DrawerModule  } from 'ng-zorro-antd-mobile';


import { TranslateModule} from '@ngx-translate/core';


import { MyHttpComponent } from './component/my-http.component';

import { MyHttpRoutingModule } from './my-http-routing.module';
import { ShareModule } from '../share/share.module';

@NgModule({
  declarations: [MyHttpComponent],
  imports: [
    CommonModule,
    FormsModule,
    MyHttpRoutingModule,
    ShareModule,
    NgZorroAntdMobileModule,
    DrawerModule,
    TranslateModule
  ],
  exports: [],
  providers: [],
})
export class MyHttpModule {}
