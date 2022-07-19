import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';
import { Product } from '../shared/product.model';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  result:Product[]=[];
  pagination:any;
  public filtercategory : Product[]=[];
  public searchterm:string='';
  public totalItem: number=0;
  searchkey:string='';
  constructor(public product:ProductService, private cart: CartService ) { }

  ngOnInit(): void {
    this.product.getData().subscribe((data:Product[]) =>{
      this.cart.getProducts()
      .subscribe(res=>{
      this.totalItem = res.length;// to find the length of the array
    });
          console.log(data);
          this.result = data;
          //for category

          this.filtercategory = data;

          //for cart
          this.result.forEach((a:any)=>{

            if(a.category === "Mobiles"){
              a.category = "Mobile"
            }
            else if(a.category === "Television"){
              a.category = "Television"
            }
            else{
              a.category = "Refrigerator"
            }
            Object.assign(a,{quantity:1,total:(a.price*a.quantity)})
          });
          console.log(this.result);
        });

         // searchkey
         this.cart.search.subscribe((val:any)=>{
          this.searchkey=val;
        })

  }
   //added to cart calling from cart service
   addtocart(dt:Product){

    this.cart.addtocart(dt);
    }

    //filter category to divide data into categories
    filter(category : string){
      this.filtercategory = this.result
      .filter((a:any) =>{
        if(a.category == category || category == ''){
          return a;
        }
      })
    }
    //search event for search bar
    search(event:any){
      this.searchterm=(event.target as HTMLInputElement).value;
      this.cart.search.next(this.searchterm);
    }


}
