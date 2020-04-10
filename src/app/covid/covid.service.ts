import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  private baseUrl='http://d0060aac.ngrok.io/show'

  constructor(private http: HttpClient) { }

  // getCovid(idCovidCity:number): Observable<any>{
  //   return this.http.get('${this.baseUrl/${idCovidCity}');
  // }

  getList():Observable<any>{
    return this.http.get('{this.baseUrl}');
  }
  
  getInsert(covid: Object): Observable<Object>{
    return this.http.post('${this.baseUrl}', covid);
  }

  getUpdate(idCovidCity:number, value:any): Observable<Object>{
    return this.http.post('${this.baseUrl}/$idCovidCity', value);
  }

  getDelete(idCovidCity:number): Observable<Object>{
    return this.http.post('${this.baseUrl}/${idCovidCity}', {responseType: 'text'});
  }
}
