import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AddproductComponent } from './addproduct/addproduct.component';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  showAdd !:boolean;
  formValue !:FormGroup;
  productData !:any;
  p:any;
  showUpdate !:boolean;

  prodName:FormControl = new FormControl("");
  prodImage:FormControl = new FormControl("");
  prodDescription:FormControl= new FormControl("");
  prodCategory: FormControl = new FormControl("");
  prodPrice: FormControl = new FormControl("");
  stock:FormControl = new FormControl("");

  result: Product[] =[];
  constructor(private api : ProductService,private formBuilder: FormBuilder,private dialog : MatDialog) { }

  ngOnInit(): void {
    this.api.getData().subscribe((data:Product[])=>{
      console.log(data);
      this.result = data;
    })
  }

  openDialog():void{
    const dialogRef= this.dialog.open(AddproductComponent,{
      width:'35%'
    }).afterClosed().subscribe((val: string) =>{
      if(val === 'save')
      {
        this.api.getData();
      }
    })
  }

  editProduct(dt:Product)
  {
    this.dialog.open(AddproductComponent,{
      width:'30%',
      data:dt
    }).afterClosed().subscribe((val: string) =>{
      if(val === 'update'){
        this.api.getData();
      }
    })
  }

  updateProduct(product:Product){
    this.api.updateProduct(product).subscribe(()=>{
      product;
      console.log('editing done')
    })
  }
  
  deleteProduct(productId : any)
  {
    this.api.deleteProduct(productId)
    .subscribe({
      next:(res)=>{
        alert("Successfully Deleted!")
      },
      error:()=>{
        alert("error while deleting the product")
      }
    })
  }
}
