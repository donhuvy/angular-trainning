import { Component, OnInit,OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { LoaderService } from '../../core/loader.service/loader.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit,OnDestroy {

  constructor(private userService:UserService,private loaderService:LoaderService) { }
  mNameFilter:string='';
  mUsers:Array<any>=[];
  mPage:number = 1;
  ngOnInit() {
    this.loaderService.showLoading();
    this.getUserList();
  }
  ngOnDestroy(){
    this.userService.doUnsubscribe();
  }
  getUserList(){
    this.userService.getUserList().subscribe(users=>{
      this.loaderService.hideLoading();
      console.log(users);
      // this.mUsers = this.mUsers.concat(users);
      this.loaderService.hideLoading();
    });
  }
  onClickLoadMore(){
    this.loaderService.showLoading();
    this.mPage = this.mPage + 1;
    this.userService.doLoadMore(this.mPage);
  }
}
