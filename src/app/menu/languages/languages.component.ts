import { Component, OnInit } from '@angular/core';
// chen TranslateService để chuyên đổi ngôn ngữ =========
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
})
export class LanguagesComponent implements OnInit {

  constructor(private _translate: TranslateService) {
 
  }

  ngOnInit() {
    this._translate.addLangs(['zh_TW', 'en_US', 'vi_VN']); // các loại ngôn ngữ sẽ được chuyển đổi
    this._translate.setDefaultLang('en_US'); // det ngôn ngữ default,
  }

  // function chuyên đổi ngôn ngữ ============================
  switchLang(lang: string) {
    this._translate.use(lang);
  }
}
