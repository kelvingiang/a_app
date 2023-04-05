import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  constructor() {
    this.memberName();
  }
  memberList = [
    {
      id: 4,
      member_id: 'L004',
      phone: '024464554635',
      address: '123 tran hung dao',
      email: 'gana@yahoo.com',
      name: '宏發生產線',
      device: [
        ['CQ03', '設備03', '組04', 0, 1, 1],
        ['CQ04', '設備04', '組04', 1, 0, 1],
        ['CQ05', '設備05', '組02', 0, 1, 0],
        ['CQ07', '設備07', '組03', 1, 0, 1],
      ],
      status: 1,
    },
    {
      id: 1,
      member_id: 'L001',
      name: '保養生產線',
      address: '78 tran hung dao',
      email: 'uuuu@yahoo.com',
      device: [
        ['EQ03', '設備03', '組02', 0, 1, 1],
        ['EQ04', '設備04', '組03', 1, 0, 1],
        ['EQ05', '設備05', '組02', 0, 1, 0],
        ['EQ07', '設備07', '組03', 1, 0, 1],
      ],
      status: 0,
    },
    {
      id: 2,
      member_id: 'L002',
      name: '金塔生產線',
      address: '45 ly tu trong',
      email: 'yahaoao@yahoo.com',
      device: [
        ['BQ05', '設備05', '組02', 0, 1, 1],
        ['BQ04', '設備04', '組01', 1, 0, 1],
        ['BQ08', '設備08', '組01', 0, 1, 0],
        ['BQ09', '設備09', '組01', 1, 0, 1],
      ],
      status: 1,
    },
    {
      id: 3,
      member_id: 'L006',
      name: '立項生產線',
      address: '88 tran ly',
      email: 'uuiiuiuiii@yahoo.com',
      device: [
        ['HQ13', '設備13', '組02', 0, 1, 1],
        ['HQ08', '設備08', '組03', 1, 0, 1],
        ['HQ05', '設備05', '組02', 0, 1, 0],
        ['HQ17', '設備17', '組02', 1, 0, 1],
      ],
      status: 0,
    },
    {
      id: 6,
      member_id: 'L007',
      name: '宏發生產線',
      address: '966 ta quang buu',
      email: '1311dgaaf@yahoo.com',
      device: [
        ['CY03', '設備033', '組04', 0, 1, 1],
        ['CY04', '設備042', '組04', 1, 0, 1],
        ['CY05', '設備053', '組02', 0, 1, 0],
        ['CY07', '設備072', '組03', 1, 0, 1],
      ],
      status: 1,
    },
    {
      id: 5,
      member_id: 'L005',
      name: '保養生產線',
      address: '232 hoa hung',
      email: '54546qe22@yahoo.com',
      device: [
        ['LQ03', '設備03', '組04', 0, 1, 1],
        ['LQ04', '設備04', '組04', 1, 0, 1],
        ['LQ05', '設備05', '組02', 0, 1, 0],
        ['LQ07', '設備07', '組03', 1, 0, 1],
        ['LQ09', '設備09', '組03', 1, 0, 0],
        ['LQ08', '設備08', '組03', 1, 0, 1],
        ['LQ01', '設備01', '組03', 1, 0, 0],
      ],
      status: 1,
    },
  ];

  memberNames: any = [];

  public memberName() {
    this.memberList.forEach((element) => {
      this.memberNames.push(element.name);
    });
  }

  public getMemberByName(name: string) {
    // if(this.productionList.match(name)){
    // }
    let obj = this.memberList.filter((item) => item.name == name);
    return obj;
  }


}
