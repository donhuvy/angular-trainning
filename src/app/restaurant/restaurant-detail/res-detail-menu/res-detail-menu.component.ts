import { Component, OnInit,Input } from '@angular/core';
import { Restaurant } from '../../restaurant';

@Component({
  selector: 'app-res-detail-menu',
  templateUrl: './res-detail-menu.component.html',
  styleUrls: ['./res-detail-menu.component.scss']
})
export class ResDetailMenuComponent implements OnInit {
  @Input('restaurant') mRestaurant:Restaurant;
  constructor() { }

  ngOnInit() {
    
  }

}
