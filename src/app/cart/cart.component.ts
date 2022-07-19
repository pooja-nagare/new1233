import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
public product: any=[];
public grandTotal!:number;
public totalItem: number=0;

  constructor(private cart:CartService,) { }

  ngOnInit(): void {
    this.cart.getProducts()
    .subscribe(res=>{
      this.product=res;
      this.totalItem=res.length;
      this.grandTotal=this.cart.getTotalPrice();
    })
  }
 
  removeItem(item:Product){
    this.cart.removeCartItem(item)
  }

  

inc(product_id:any,quantity:any){
  for(let i =0; i<this.product.length;i++){
    if(this.product[i].productId===product_id){
      if(quantity!=5){
      this.product[i].quantity=parseInt(quantity)+1;
      }
    }
    this.grandTotal=this.cart.getTotalPrice();
  }
}

dec(product_id:any,quantity:any){
  for(let i =0; i<this.product.length;i++){
    if(this.product[i].productId===product_id){
      if(quantity!=1){
      this.product[i].quantity=parseInt(quantity)-1;
      }
    }
    this.grandTotal=this.cart.getTotalPrice();
  }
}
}