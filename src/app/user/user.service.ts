import { Injectable, isDevMode, enableProdMode } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of, timer, throwError, interval, BehaviorSubject, combineLatest, Subject, from } from 'rxjs';
import { map, catchError, retryWhen, tap, delayWhen, retry, mergeMap, take, shareReplay, switchMap, takeUntil } from 'rxjs/operators'
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  mApiUrl: string = environment.apiUrl;
  mPage$: BehaviorSubject<null | number>;
  mUnsubscribe$: Subject<void>;
  constructor(private http: HttpClient) {
    this.mPage$ = new BehaviorSubject(1);
    this.mUnsubscribe$ = new Subject();
    // using a regular map
    from([1, 2, 3, 4]).pipe(
      map(param => of(param))
    ).subscribe(val => val.subscribe(data => console.log(data)));
    // this.mUnsubscribe$ = new BehaviorSubject(null);
  }
  getUserList(): Observable<any> {
    let url: string = this.mApiUrl + "user";
    return this.mPage$.pipe(map(page=>{
      return this.http.post(url,{
        page:page
      })
    }))
  }
  doLoadMore(page: number) {
    this.mPage$.next(page);
  }
  doUnsubscribe() {
    this.mUnsubscribe$.next();
    this.mPage$.next(0);
  }
  login(username: string, password: string) {
    let url = this.mApiUrl + "login";
    let params = {
      email: username,
      password: password
    }
    return this.http.post(url, params);
  }
}
