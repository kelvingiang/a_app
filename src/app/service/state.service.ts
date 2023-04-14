import { Injectable } from '@angular/core';

/*tạo thêm phần state để lưu lại ngôn ngữ hiện hành để khi
refresh vẫn giữ lại ngôn ngữ hiện hành
service này sẽ dc thêm vô app.module.ts và phần khỏi tạo sẽ khai báo trong app.component.ts
còn phần thay đổi ngôn ngữ sẽ ở language.component.ts set lại ngôn ngữ mới

*/

@Injectable({
  providedIn: 'root',
})
export class StateService {
  constructor() {}

  setLanguage(lang: string): void {
    // localStorage là 1 hằng số đang được Angular định sẳn
    localStorage.setItem('lang', lang);
  }

  getLanguage(): string {
    return localStorage.getItem('lang') || 'en_US'; // 如果 LocalStorage 中不存在語言設定，預設為英文
  }
}
