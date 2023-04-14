import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StateService } from './service/state.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'a_app';
  // khi mới vào khỏi tạo ngôn ngữ và phần đọc file ngôn ngữ
  constructor(
    private _stateService: StateService,  private _translate: TranslateService
  ) {
    const lang = this._stateService.getLanguage();
     this._translate.use(lang || 'en_US');
  }
}
