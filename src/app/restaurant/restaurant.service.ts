import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, Subject, combineLatest, BehaviorSubject } from 'rxjs';
import { Category } from './category';
import { map, switchMap, debounceTime,tap,withLatestFrom } from 'rxjs/operators';
import { Restaurant } from './restaurant';
import { RestaurantModule } from './restaurant.module';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  mApiUrl: string = environment.apiUrl;
  mApiKey: string = environment.apiKey;
  mResPerPage: number = 12;
  categoryFilter$: BehaviorSubject<string>;
  pageFilter$: BehaviorSubject<number>;
  queryFilter$: BehaviorSubject<string>;
  constructor(private http: HttpClient) {
    this.categoryFilter$ = new BehaviorSubject('');
    this.pageFilter$ = new BehaviorSubject(0);
    this.queryFilter$ = new BehaviorSubject('cafes');
  }
  // get categories list
  getCategoriesList(): Observable<Array<Category>> {
    let url: string = this.buildUrl('categories');
    return this.http.get<{ categories: Array<any> }>(url).pipe(map(data => {
      return data.categories.map(cate => {
        return cate.categories
      })
    }));
  }
  serchRestaurant(): Observable<Array<any>> {
    let url: string = this.buildUrl('search');
    return combineLatest(this.pageFilter$, this.categoryFilter$, this.queryFilter$).pipe(
      debounceTime(1000),
      switchMap(([page, cate, query]) => {
        return this.http.get<any>(url, {
          params: {
            start: page.toString(),
            count: this.mResPerPage.toString(),
            category: cate,
            q: query
          }
        }).pipe(map(data => {
          return data.restaurants.map((res) => {
            return res.restaurant
          })
        }))
      }))
  }
  getRestaurantDetail(paramData): Observable<Restaurant> {
    let url: string = this.buildUrl('restaurant');
    let params = this.buildParams(paramData)
    return this.http.get<Restaurant>(url, { params: params });
  }
  getRestaurantReviews(paramData) {
    let url: string = this.buildUrl('reviews');
    let params = this.buildParams(paramData)
    return this.http.get<any>(url, { params: params });
  }
  doFilterCategory(cateIds: Array<string>) {
    this.categoryFilter$.next(cateIds.join());
  }
  doFilterPage(page) {
    this.pageFilter$.next(page);
  }
  doLoadMore(){
    let lastPage:number = this.pageFilter$.value;
    let nextPage = +lastPage + this.mResPerPage;
    this.pageFilter$.next(nextPage);
  }
  doFilterQuery(query: string) {
    this.queryFilter$.next(query);
  }
  resetSearchRes(){
    this.pageFilter$.next(0);
    this.categoryFilter$.next('');
    this.queryFilter$.next('cafes');
  }
  // build header for request
  private buildHeader(): HttpHeaders {
    let header = new HttpHeaders().set('user-key', this.mApiKey);
    return header;
  }
  // build params for request
  private buildParams(paramsData): HttpParams {
    let params = new HttpParams({ fromObject: paramsData });
    return params;
  }
  // build url for request
  private buildUrl(endpoint: string): string {
    return this.mApiUrl + endpoint;
  }
}
