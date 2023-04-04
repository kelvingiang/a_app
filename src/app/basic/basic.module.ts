import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';


import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';   
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent, ContactComponent],
  imports: [CommonModule, NgZorroAntdMobileModule],
  providers: [],
  exports:[],
})
export class BasicModule {}