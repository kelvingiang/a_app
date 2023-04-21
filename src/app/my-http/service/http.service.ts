import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

import { IHttp } from '../define/ipa.interface';
// import { RequestOptions } from '@angular/http';
// import { IconHandler } from 'ng-zorro-antd-mobile/core';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer my-auth-token'
  })
};

@Injectable({
  providedIn: 'root',
})

export class MyHttpService {
  constructor(private _httpClient: HttpClient) {}
  private url = 'https://6438c3ce4660f26eb1a2f397.mockapi.io/kelvin/member';
  urlError: boolean = false;
  data: any;

  public getData(): Observable<IHttp> {
    return this._httpClient.get<IHttp>(this.url).pipe(
      // nếu có lỗi khi lấy data sẽ trả về thông báo lỗi
      catchError((error: any) => {
        return throwError('something went wrong');
      })
    );
  }

  public getItem(id: string): Observable<IHttp>  {
    return this._httpClient.get<IHttp>(this.url + '/' +id);
  }

  public add(dataList: IHttp):Observable<IHttp>{
    
   return this._httpClient.post<IHttp>(this.url, dataList, httpOptions);

    // this._httpClient.post<any>(this.url, dataList).subscribe({

    //   next: (data) => {
    //     this.postId = data.id;
    //     this.getData();
    //   },
    //   // khi insert data lỗi
    //   error: (error) => {
    //     this.errorMessage = error.message;
    //     console.error('There was an error!', error);
    //   },
    // });
  }

  public update(id: string, data:any): Observable<IHttp> {
    console.log('Updating'+ data);
      return this._httpClient.put<IHttp>(this.url + '/' +id, data, httpOptions);
  }

  public delete(id: string): Observable<IHttp> {
     return this._httpClient.delete<IHttp>(this.url + '/' +id);
  }

  private extractData(res: Response) {
    return res.json() || {};
  }
}
