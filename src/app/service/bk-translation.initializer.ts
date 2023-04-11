import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
    // 此出的路径需要和第二步新建的文件夹保持一致
    return new TranslateHttpLoader(http, './assets/i18n/', '.json' + '?nocache=' + (new Date).getTime());
}

export function initTranslation(translationInitializer: TranslationInitializer) {
    return function () {
        return translationInitializer.init('zh_TW');
    };
}

@Injectable({ providedIn: 'root' })
export class TranslationInitializer {
    constructor(private translateService: TranslateService) { }
    init(locale = 'zh_CN') {
        console.log('ssss9999');
        this.translateService.addLangs(['vi_vn', 'zh_TW', 'en_US']);
        this.translateService.use(locale);
    }
}