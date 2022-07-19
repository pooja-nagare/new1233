import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../shared/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartItemList:Product[]=[]
  public productList=new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  http:any;

  constructor() { }
  getProducts()
  {
    return this.productList.asObservable();
  }

  setProducts(product :any)
  {
    this.cartItemList.push(...product);
    this.productList.next(this.cartItemList);
  }

  addtocart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
  }

  getTotalPrice():number
  {
    let grandTotal=0;
    this.cartItemList.map((a:any)=>{
      grandTotal +=(a.prodPrice*a.quantity);
    })
    return grandTotal;
  }

  removeCartItem(product: Product){
    for(let i=0; i<this.cartItemList.length;i++){
      if(this.cartItemList[i].prodId === product.prodId){
        this.cartItemList.splice(i,1);
      }
    }
  }
}
