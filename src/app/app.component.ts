import { Component,OnInit,HostBinding } from '@angular/core';
import { ThemeService } from './core/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'shopapp-tranning';
  mTheme:string='';
  @HostBinding('class') mThemeClass:string;
  constructor(private themeService:ThemeService){

  }
  ngOnInit(){
    this.getTheme();
  }
  getTheme(){
    this.themeService.getTheme().subscribe((theme)=>{
      this.mTheme = theme + '-theme';
      this.mThemeClass = this.mTheme;
    })
  }
}
