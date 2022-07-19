import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';
import { ProductService } from '../shared/product.service';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  result: Product[]=[];
  constructor(private order:ProductService,private cartService:CartService) { }

  ngOnInit(): void {
    this.order.getData().subscribe( (data:Product[]) =>{
      console.log(data)
      this.result= data;

      //for cart
      this.result.forEach((a:Product)=>{
        Object.assign(a,{quantity:1,total:a.prodPrice})
      })
    });
  }
  addtocart(dt:any){
    this.cartService.addtocart(dt);
  }
}
