import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
const Default_Theme:string='primary';
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  mCurrentTheme:BehaviorSubject<string|null>
  constructor() { 
    this.mCurrentTheme = new BehaviorSubject(Default_Theme);
  }
  setTheme(theme:string){
    this.mCurrentTheme.next(theme);
  }
  getTheme(){
    return this.mCurrentTheme;
  }
}
