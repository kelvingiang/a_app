import { Component, OnInit } from '@angular/core';
import { PickerService, ToastService } from 'ng-zorro-antd-mobile';
import { MemberService } from 'src/app/service/member.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  height: number = document.documentElement.clientHeight;
  nums: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  state = {
    docked: false
  };
  constructor() {}

  ngOnInit() {}
  onDockedChange = (event:any) => {
    console.log('dockedChanged', event);
    this.state.docked = !this.state.docked;
  }
}
