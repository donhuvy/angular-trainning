import { Injectable } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader'; 
@Injectable({
  providedIn: 'root',
})
export class LoaderService {

  constructor(private loaderService:NgxUiLoaderService) { 

  }
  showLoading(){
    this.loaderService.start();
  }
  hideLoading(){
    this.loaderService.stop();
  }
}
