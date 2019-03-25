import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router,ActivatedRoute } from '@angular/router';
import { LoaderService } from '../../core/services/loader.service/loader.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  mUsername:string='abc@gmail.com';
  mPassword:string='danbeo95';
  constructor(private userService:UserService, private loaderService:LoaderService,private router:Router,private activedRoute:ActivatedRoute) { }

  ngOnInit() {
  }
  onClickLogin(){
    this.loaderService.showLoading();
    setTimeout(()=>{
      this.loaderService.hideLoading();
      this.onResLogin();
    })
  }
  onResLogin(){
    localStorage.setItem('user','true');
    this.router.navigate(['restaurant'])
  }
  goToUserList(){
    this.router.navigate(['../user-list'],{relativeTo:this.activedRoute});
  }
}
