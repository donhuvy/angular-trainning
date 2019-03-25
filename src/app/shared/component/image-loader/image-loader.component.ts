import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
const errorImage: string = '../../../../assets/imgs/error.png';
const defaultImage: string = '../../../../assets/imgs/restaurant.png';
@Component({
  selector: 'app-image-loader',
  templateUrl: './image-loader.component.html',
  styleUrls: ['./image-loader.component.scss']
})
export class ImageLoaderComponent implements OnInit {
  @Input('image') image: string;
  @ViewChild('imageElement') imageElement: ElementRef;
  isLoaded: boolean = false;
  isError: boolean = false;
  errorImage:string = errorImage;
  constructor() { }
  ngOnInit() {
    this.onImageLoad();
    this.onImageError();
  }
  onImageLoad() {
    this.imageElement.nativeElement.onload = () => {
      this.isLoaded = true;
    }
  }
  onImageError() {
    this.imageElement.nativeElement.onerror = () => {
      this.isError = true;
      this.isLoaded  =true;
      this.image = this.errorImage;
    }
  }
}
