import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';


import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';   
import { ContactComponent } from './contact/contact.component';
import { MemberComponent } from './member/member.component';

import { MemberService } from '../service/member.service';

@NgModule({
  declarations: [HomeComponent, AboutComponent, ContactComponent, MemberComponent],
  imports: [CommonModule, NgZorroAntdMobileModule, FormsModule],
  providers: [MemberService],
  exports:[],
})
export class BasicModule {}