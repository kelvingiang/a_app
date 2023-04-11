import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class LocalizationService {
  private initialLanguage = new BehaviorSubject(null);

  constructor() {}


  getInitialLanguage() {
    return this.initialLanguage.asObservable();
  }


  setLanguage(language: string) {
    // some logic to change language
  }
 // loadTranslations(language: string): Observable<any> {
  //   const translationFile = `assets/i18n/${language}.json`;
  //   console.log(translationFile);
  //   return this.http.get(translationFile).pipe(
  //     map((translations) => {
  //       this.translations = translations;
  //       return translations;
  //     })
  //   );
  // }

  // translate(key: string): string {
  //   if (!this.translations) {
  //     return key;
  //   }
  //   console.log('sss-'+ key);
  //   return this.translations[key] || key;
  // }
}
