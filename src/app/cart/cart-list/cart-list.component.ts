import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormArray,FormBuilder,FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  mProducts:Array<any>=[];
  mProductsSelect:Array<{name:string,category:string,price:number,number:number,id:number,image_url:string}>=[];
  mFormGroup:FormGroup;
  mFormCustomer:FormGroup;
  mTotalPrice:number = 0;
  constructor(private cartService:CartService,private fb:FormBuilder,private router:Router) { }

  ngOnInit() {
    this.onLoadCarts();
    this.initForm();
    this.doLoadProductsToForm();
    this.doSelectProducts();
  }
  initForm(){
    this.mFormGroup = this.fb.group({
      products:this.fb.array([])
    });
    this.mFormCustomer = this.fb.group({
      name:new FormControl('',[Validators.required]),
      address:new FormControl('',[Validators.required]),
      phone:new FormControl('',[Validators.required])
    })
  }
  get productsForm(){
    return this.mFormGroup.get('products') as FormArray;
  }
  onLoadCarts(){
    let products = this.cartService.getCarts();
    this.mProducts = this.mProducts.concat(products);

  }
  doLoadProductsToForm(){
    if(this.mProducts.length==0) return;
    this.mProducts.map((prod)=>{
      let form = this.fb.group({
        number:new FormControl(1),
        select:new FormControl(true),
        name:new FormControl(prod.name),
        category:new FormControl(prod.category),
        id:new FormControl(prod.id),
        price:new FormControl(prod.price),
        image_url:new FormControl(prod.image_url)
      });
      this.productsForm.push(form);

    })
  }
  onSelectProduct(){
    this.doSelectProducts();
  }
  doSelectProducts(){
    this.mProductsSelect = [];
    this.mTotalPrice = 0;
    this.mProducts.map((_,i)=>{
      let formValue = this.productsForm.get(i.toString()).value;
      if(formValue.select){
        this.mProductsSelect.push(formValue);
      }
    });
    this.mProductsSelect.map((prod)=>{
      this.mTotalPrice = (+prod.number * prod.price) + this.mTotalPrice;
    })
  }
  onClickAdd(i:number){
    let number = +this.productsForm.get(i.toString()).value.number;
    number = number + 1;
    this.productsForm.get(i.toString()).get('number').setValue(number);
    this.doSelectProducts();

  }
  onClickRemove(i){
    let number = +this.productsForm.get(i.toString()).value.number;
    number = number - 1;
    if(number == 0) return;
    this.productsForm.get(i.toString()).get('number').setValue(number);
    this.doSelectProducts();
  }
  onClickCheckOut(){
    this.router.navigate(['checkout/checkout-done']);
    this.cartService.removeCarts();
    this.cartService.addToHistory(this.mProductsSelect);
  }
}
