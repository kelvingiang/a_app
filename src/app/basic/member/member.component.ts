import { Component, OnInit } from '@angular/core';
import { PickerService, ToastService } from 'ng-zorro-antd-mobile';
import { MemberService } from 'src/app/service/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
})
export class MemberComponent implements OnInit {
  name: string = '選擇會員';
  name2: string = '选择';
  name3: string = '选择';
  value: any = [];
  value2: any = [];
  value3: any = [];

  MemberList: any = [];
  selectList: any = [];

  seasons = [
    {
      label: '2013',
      children: [
        {
          label: 'spring',
          children: ['1', '2', '3'],
        },
        {
          label: 'summer',
          children: ['a', 'b', 'c'],
        },
        {
          label: 'fall',
          children: ['I', 'II', 'III'],
        },
        {
          label: 'winter',
          children: ['A', 'B', 'C', 'D'],
        },
      ],
    },
    {
      label: '2014',
      children: [
        {
          label: '春',
        },
        {
          label: '夏',
        },
      ],
    },
  ];

  singleArea: any = [
    'thu nhat',
    'thu hai',
    'thu ba',
    'thu tu',
    'thu nam',
    'thu sau',
    'thu bay',
  ];

  constructor(
    private _picker: PickerService,
    private _memberService: MemberService
  ) {}

  ngOnInit() {
      (this.MemberList = this._memberService.memberList()),
      (this.selectList = this._memberService.memberName())
  }

  showPicker() {
    this._picker.showPicker(
      {
        value: [this.value],
        data: this.selectList,
        okText: 'ok',
        dismissText: 'cancel',
      },
      (result) => {
        if (result.length > 0) {
          this.name = result;
          this.MemberList =  this._memberService.getMemberByName(result);
        } else {
          console.log('nho hon khong');
        }
      },
      (cancel) => {
        this.MemberList = this._memberService.memberList();
        this.name = '選擇會員';
      }
    );
  }

  getResult(result: any) {
    this.value = [];
    let temp = '';
    result.forEach((item: any) => {
      this.value.push(item.label || item);
      temp += item.label || item;
    });
    return this.value.map((v: any) => v).join(',');
  }

  getValue(result: any) {
    let value: any = [];
    let temp = '';
    result.forEach((item: any) => {
      value.push(item.value || item);
      temp += item.value || item;
    });
    return value;
  }

  onOk2(result: any) {
    this.name2 = this.getResult(result);
  }

  onOk3(result: any) {
    this.name3 = this.getResult(result);
  }
}
