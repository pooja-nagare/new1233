import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
totalItemNumber:number = 0;
searchterm:string='';
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{
      this.totalItemNumber = res.length;
     
    })
  }

  search(event:any){
    this.searchterm=(event.target as HTMLInputElement).value;
    this.cartService.search.next(this.searchterm);
  }

}
