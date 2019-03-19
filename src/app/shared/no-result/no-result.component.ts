import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-no-result',
  templateUrl: './no-result.component.html',
  styleUrls: ['./no-result.component.scss']
})
export class NoResultComponent implements OnInit {
  @Input('text') mText:string = "Không có kết quả phù hợp !"; 
  constructor() { }

  ngOnInit() {
  }
  
}
