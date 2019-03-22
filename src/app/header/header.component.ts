import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { ThemeService } from '../core/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pages: Array<{ title: string, link: string, icon: string }>;
  themes: Array<string> = ['primary', 'secondary'];
  selectedTheme: string;
  constructor(private router: Router, private activedRoute: ActivatedRoute, private themeService: ThemeService) {
  }
  ngOnInit() {
    this.pages = [
      { title: 'Product', link: 'product', icon: 'accessible' },
      { title: 'Carts', link: 'cart', icon: 'shopping_cart' },
      { title: 'Order History', link: 'order', icon: 'favorite_border' },
      { title: 'User', link: 'user', icon: 'supervised_user_circle' },
      { title: 'Restaurant', link: 'restaurant', icon: 'restaurant' }
    ]
  }
  onSelectTheme() {
    this.themeService.setTheme(this.selectedTheme);
    console.log(this.selectedTheme);
  }
}
