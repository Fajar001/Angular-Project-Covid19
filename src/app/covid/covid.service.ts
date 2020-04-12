import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { retry } from 'rxjs/operators';
import { Covid } from './covid'

@Injectable({
  providedIn: 'root'
})
export class CovidService {
  private baseUrl='http://localhost:8080/'

  constructor(private http: HttpClient) { }

  public getCovid(idCovidCity:number): Observable<any>{
    return this.http.get(this.baseUrl+ "city/show/" + idCovidCity);
  }

  public getList():Observable<any>{
    return this.http.get(this.baseUrl + "city/show");
  }
  
  public getInsert(covid: Object): Observable<Object>{
    return this.http.post(this.baseUrl+"city/insert", covid);
  }

  public getUpdate(idCovidCity:number, cityName:string, caseByCity:number, deathsByCity:number, recovered:number): Observable<Object>{
    return this.http.post(this.baseUrl+"city/update"+ "/"+ idCovidCity+ "/"+cityName+ "/"+caseByCity+ "/"+deathsByCity+ "/"+recovered, {responseType: 'text'});
  }

  public getDelete(idCovidCity:number): Observable<Object>{
    return this.http.post(this.baseUrl+"city/deleteId/" +idCovidCity, {responseType: 'text'});
  }

  public getfindAllTotal():Observable<any>{
    return this.http.get(this.baseUrl+ "city/show/all");
  }

  public getUser(username:string): Observable<any>{
    return this.http.get(this.baseUrl+ "login/show/username"+ username);
  }
}
