import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormControl } from '@angular/forms';
import { CartService } from '../shared/cart.service';
import { OrderService } from '../shared/order.service';
import { Orderdetails } from '../shared/orderdetails.model';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-billing-information',
  templateUrl: './billing-information.component.html',
  styleUrls: ['./billing-information.component.css']
})
export class BillingInformationComponent implements OnInit {
  public product:any=[];
  public grandTotal!:number;
  public totalItem: number=0;

  Id: FormControl= new FormControl("")
  Fname: FormControl = new FormControl("");
    Lname: FormControl = new FormControl("");
    Address: FormControl = new FormControl("");
    Landmark: FormControl = new FormControl("");
    City: FormControl = new FormControl("");
    Pincode: FormControl = new FormControl("");
    MobileNo: FormControl = new FormControl("");
    Email: FormControl = new FormControl("");
  constructor(private cart:CartService, private order:OrderService) { }

  ngOnInit(): void {

  }

  saveorder(){
    let details:Orderdetails={
      Id:this.Id.value,
      Fname: this.Fname.value,
      Lname: this.Lname.value,
      Address: this.Address.value,
      Landmark:this.Landmark.value,
      City: this.City.value,
      Pincode:parseInt(this.Pincode.value) ,
      MobileNo:parseInt(this.MobileNo.value),
      Email: this.Email.value,
    };
    this.order.addDetail(details);
    
    this.cart.getProducts()
    .subscribe(res=>{
      this.product=res;
      this.grandTotal=this.cart.getTotalPrice();
    })
    this.cart.getProducts()
    .subscribe(res=>{
    this.totalItem = res.length;
  })
  }  

}
