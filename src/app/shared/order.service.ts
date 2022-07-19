import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Orderdetails } from './orderdetails.model';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
  addDetail(details: Orderdetails) {
    let url = "http://localhost:63785/api/OrderDetails"
    this.http.post(url, details)
      .subscribe(result => console.log("Data send to Database"));
      alert("Product added succesfully");
  }
}
