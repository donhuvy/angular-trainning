import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject,combineLatest, BehaviorSubject } from 'rxjs';
import { Category } from './category';
import { map, switchMap  } from 'rxjs/operators';
import { Restaurant } from './restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  mApiUrl: string = environment.apiUrl;
  mApiKey: string = environment.apiKey;
  categoryFilter$:BehaviorSubject<string | void>;
  pageFilter$:BehaviorSubject<number | void>;
  constructor(private http: HttpClient) {
    this.categoryFilter$ = new BehaviorSubject('');
    this.pageFilter$ = new BehaviorSubject(0);

  }
  getCategoriesList(): Observable<Array<Category>> {
    let url: string = this.buildUrl('categories');
    let header = this.buildHeader();
    return this.http.get<{ categories: Array<any> }>(url, { headers: header }).pipe(map(data => {
      return data.categories.map(cate => {
        return cate.categories
      })
    }));
  }
  serchRestaurant():Observable<Array<any>> {
    let url: string = this.buildUrl('search');
    let header = this.buildHeader();
    return combineLatest(this.pageFilter$).pipe(switchMap(cate=>{
      return this.http.get<any>(url, {
        headers: header, params: {
          start:cate.toString(),
          count:'10',
          category:''
        }
      }).pipe(map(data=>{
        return data.restaurants.map((res)=>{
          return res.restaurant
        })
      }))
    }))
  }

  doFilterCategory(){
    this.categoryFilter$.next('');
  }
  doFilterPage(){
    let lastPage = this.pageFilter$.value;
    let nextPage = +lastPage + 10;
    this.pageFilter$.next(nextPage);
  }
  private buildHeader(): HttpHeaders {
    let header = new HttpHeaders().set('user-key', this.mApiKey);
    return header;
  }
  private buildParams(paramsData): HttpParams {
    let params = new HttpParams(paramsData);
    return params;
  }
  private buildUrl(endpoint: string): string {
    return this.mApiUrl + endpoint;
  }
}
