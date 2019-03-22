import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { LoaderService } from '../../core/loader.service/loader.service';
import { Router,ActivatedRoute } from '@angular/router';

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
    this.userService.login(this.mUsername,this.mPassword).subscribe(res=>{
      this.loaderService.hideLoading();
      this.goToUserList();
    },e=>{
      this.loaderService.hideLoading();
    },
    ()=>{this.loaderService.hideLoading()}
    )
  }
  goToUserList(){
    this.router.navigate(['../user-list'],{relativeTo:this.activedRoute});
  }
}
