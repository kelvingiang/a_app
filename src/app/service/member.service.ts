import { Injectable } from '@angular/core';
import { Member } from '../class/member.class';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
 private  members: Member[] = [];
 private  memberNames: any = [];

  constructor() {
    this.addMember(new Member(1, 'L001','宏發生產線', '123 tran hung dao','gana@yahoo.com', 1));
    this.addMember(new Member(2, 'L002','保養生產線', '245 nguyen trai','nguyentrai@yahoo.com', 1));
    this.addMember(new Member(4, 'L004','金塔生產線', '78 nguyen bieu','nguyenbieu@yahoo.com', 0));
    this.addMember(new Member(6, 'L006','宏發生產線', '62 ly thuong kiet','lythuongkiet@yahoo.com', 1));
    this.addMember(new Member(5, 'L005','立項生產線', '889 bac hai','bachai@yahoo.com', 1));
    this.addMember(new Member(3, 'L003','保養生產線', '823 truong son','truongson@yahoo.com', 1));

    this.memberName();
  }

  public addMember(member: Member){
    this.members.push(member);
  
    return this.members;
  }

  public memberList(){
    return this.members;
  }

  public memberName() {
    this.members.forEach((element) => {
      this.memberNames.push(element.name);
    });
    return this.memberNames;
  }

  public getMemberByName(name: string) {
    // if(this.productionList.match(name)){}
    let obj = this.members.filter((item) => item.name == name);
    return obj;
  }
}

  // memberList = [
  //   {
  //     id: 4,
  //     member_id: 'L004',
  //     phone: '024464554635',
  //     address: '123 tran hung dao',
  //     email: 'gana@yahoo.com',
  //     name: '宏發生產線',
  //     status: 1,
  //   },
  //   {
  //     id: 1,
  //     member_id: 'L001',
  //     name: '保養生產線',
  //     address: '78 tran hung dao',
  //     email: 'uuuu@yahoo.com',
  //     status: 0,
  //   },
  //   {
  //     id: 2,
  //     member_id: 'L002',
  //     name: '金塔生產線',
  //     address: '45 ly tu trong',
  //     email: 'yahaoao@yahoo.com',
  //     status: 1,
  //   },
  //   {
  //     id: 3,
  //     member_id: 'L006',
  //     name: '立項生產線',
  //     address: '88 tran ly',
  //     email: 'uuiiuiuiii@yahoo.com',
  //     status: 0,
  //   },
  //   {
  //     id: 6,
  //     member_id: 'L007',
  //     name: '宏發生產線',
  //     address: '966 ta quang buu',
  //     email: '1311dgaaf@yahoo.com',
  //     status: 1,
  //   },
  //   {
  //     id: 5,
  //     member_id: 'L005',
  //     name: '保養生產線',
  //     address: '232 hoa hung',
  //     email: '54546qe22@yahoo.com',
  //     status: 1,
  //   },
  // ];


