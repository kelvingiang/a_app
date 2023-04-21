import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MyHttpService } from '../service/http.service';
import { IHttp } from '../define/ipa.interface';

import { ModalService } from 'ng-zorro-antd-mobile';

@Component({
  selector: 'app-name',
  templateUrl: './my-http.component.html',
  styleUrls: ['./my-http.component.scss'],
})
export class MyHttpComponent implements OnInit {
  dataList: any = [];
  member: any = [];
  addData: IHttp;
  errorStatus: boolean = false;
  showAdd: string = '0';
  showEdit: string = '0';
  memberID: string;
  memberName: string;
  memberImage: string;
  memberEmail: string;
  memberPhone: string;
  memberAddress: string;

  state = {
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
  };

  constructor(
    private _MyHttpService: MyHttpService,
    private _translate: TranslateService,
    private _ModalService: ModalService
  ) {}

  ngOnInit(): void {
    // khi mới vô trang cho load data từ server
    this._MyHttpService.getData().subscribe(
      (data) => {
        this.dataList = data;
      },
      (error) => {
        console.log(error + ': ' + error);
        this.errorStatus = true;
      }
    );
  }

  // function thêm data đẩy lên server
  addItem() {
    // mở cái giao diện nhập liệu thêm mới
    this.showAdd = '2';

    // áp dụng two way binding
    this.addData = {
      name: this.memberName,
      avatar: this.memberImage,
      email: this.memberEmail,
      phone: this.memberPhone,
      address: this.memberAddress,
    };

    // gọi function thêm mới ở file Service
    this._MyHttpService.add(this.addData).subscribe(
      // giá trị trả về
      (response: any) => {
        this.dataList.push(response);
        // console.log('success', response);
      },
      // lỗi trả về
      (error: any) => {
        console.log('error', error);
      }
    );
  }

  // function xem thông tin riêng của từng item áp dụng Modal của ant design
  clickView(id: string) {
    // mở Modal
    this.state.modal1 = true;
    // lấy data từ trang service
    this._MyHttpService.getItem(id).subscribe(
      (response: any) => {
        this.member = response;
        console.log('success', response);
      },
      (error: any) => {
        console.log('error', error);
      }
    );
  }

  // footer của Modal
  footer = [
    {
      text: 'Ok',
      onPress: () => {
        console.log('ok');
        this.onClose('modal1');
      },
    },
  ];

  // đóng Modal
  onClose(key: any) {
    this.state.modal1 = false;
    // this.state[key] = false;
  }

  clickEdit(key: string) {
    this._MyHttpService.getItem(key).subscribe(
      (response: any) => {
        this.memberID = response.id;
        this.memberName = response.name;
        this.memberImage = response.avatar;
        this.memberEmail = response.email;
        this.memberPhone = response.phone;
        this.memberAddress = response.address;
        this.showEdit = '1';
      },
      (error: any) => {
        console.log('error', error);
      }
    );
  }

  editItem() {
    this.showEdit = '2';
    let editData = {
      name: this.memberName,
      avatar: this.memberImage,
      email: this.memberEmail,
      phone: this.memberPhone,
      address: this.memberAddress,
    };

    this._MyHttpService.update(this.memberID, editData).subscribe(
      (response: any) => {
        console.log(response);
        this.dataList.map((obj: any) => {
          if (obj.id == response.id) {
            obj.name = response.name;
            obj.avatar = response.avatar;
            obj.email = response.email;
            obj.phone = response.phone;
            obj.address = response.address;
          }
        });
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  // function xóa 1 item áp dụng comfrom của ant design
  clickDelete(id: string) {
    this._ModalService.alert('Delete', 'Are you sure???', [
      { text: 'Cancel', onPress: () => console.log('cancel') },
      {
        text: 'Ok',
        onPress: () =>
          this._MyHttpService.delete(id).subscribe(
            (response: any) => {
              // tim đế đối tương trong array có ID bằng với ID chuyển vào
              let index = this.dataList.findIndex(
                (item: any) => item.id === id
              );
              // thực hiện về xóa và cập nhật lại dư liệu
              this.dataList.splice(index, 1);
            },
            (error: any) => {
              console.log('error', error);
            }
          ),
        style: {
          color: '#ffffff',
          background: '#00ff00',
        },
      },
    ]);
  }

  // mở thêm mới
  open() {
    this.showAdd = '1';
  }

  // đóng thêm mới
  close() {
    this.showAdd = '2';
  }

  // đóng chỉnh sửa
  closeEdit() {
    this.showEdit = '2';
  }
}

// clickDelete(id: string) {
//   this._MyHttpService.delete(id).subscribe(
//     (response: any) => {
//       // tim đế đối tương trong array có ID bằng với ID chuyển vào
//       let index = this.dataList.findIndex((item: any) => item.id === id);
//       // thực hiện về xóa và cập nhật lại dư liệu
//       this.dataList.splice(index, 1);
//     },
//     (error: any) => {
//       console.log('error', error);
//     }
//   );
// }
