import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup } from '@angular/forms'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/shared/product.model';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  actionBtn : string ="Save";

  prodName :FormControl= new FormControl("");
  prodImage:FormControl= new FormControl("");
  prodDescription:FormControl= new FormControl("");
  prodCategory: FormControl = new FormControl("");
  prodPrice: FormControl = new FormControl("");
  stock:FormControl = new FormControl("");


  prodForm = new FormGroup({
    prodName : new FormControl(""),
    prodImage: new FormControl(""),
    prodDescription:new FormControl(""),
    prodCategory:new FormControl(""),
    prodPrice:new FormControl(""),
    stock:new FormControl(""),
  })
result:Product[]=[];
  constructor(private product:ProductService, private formBuilder : FormBuilder, public dialog:MatDialog,  private dialogRef: MatDialogRef<AddproductComponent>,
    @Inject (MAT_DIALOG_DATA) public editData: Product, private http: HttpClient) { }

  ngOnInit(): void {
    this.product.getData().subscribe((data:Product[])=>{
      this.result=data;
    })

    if(this.editData){
      this.actionBtn="Update";

      this.prodName.setValue(this.editData.prodName);
      this.prodImage.setValue(this.editData.prodImage);
      this.prodDescription.setValue(this.editData.prodDescription);
      this.prodCategory.setValue(this.editData.prodCategory);
      this.prodPrice.setValue(this.editData.prodPrice);
      this.stock.setValue(this.editData.stock);
    }
  }

  save()
  {
    if(!this.editData)
    {
      let product: Product={
        prodId: 0,
        prodName: this.prodName.value,
        prodDescription: this.prodDescription.value,
        prodCategory: this.prodCategory.value,
        prodImage: this.prodImage.value,
        prodPrice: parseFloat(this.prodPrice.value),
        stock: parseInt(this.stock.value),  
      };
      this.product.addProduct(product);
      alert("Product added successfully");
      this.dialogRef.close();
      this.product.getData();
    }
    else{

    }
  }

  updateProduct(product:Product){
    this.product.updateProduct(product).subscribe(()=>{
      product;
      console.log('editing done')
    })
  }

}
