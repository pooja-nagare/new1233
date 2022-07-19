import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Product } from './product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public url='http://localhost:63785/api'
  constructor(private http:HttpClient) { }
 

  getData():Observable<Product[]>{
 return this.http.get <Product[]>("http://localhost:63785/api/Products");
  }

  addProduct(val : Product){
    return this.http.post<Product>(this.url +'/Products', val,{
      headers:{
        "Access-Control-Allow-Origin":"*"
      }
    }).subscribe(result => console.log("Data entered in Database Successfully !"));
  }

  getSingleProduct(productId: Number): Observable<Product> {
    return this.http.get<Product>(this.url + '/Products/' + productId);

    }
  updateProduct(val:Product){
    return this.http.put(this.url+ '/Products',val);
  }
  deleteProduct(val:Product){
    return this.http.delete(this.url+ '/Products/'+val);
  }
  //Editing Product
  EditCart(val:Product){
    return this.http.put(this.url+'/Products/'+val.prodId,val)
  }
}
