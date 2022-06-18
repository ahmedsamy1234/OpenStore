import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Product } from './model/product';
@Injectable({
  providedIn: 'root'
})
export class SyncproductsService {
  baseurl="https://captello.firebaseio.com/products.json";
  constructor(public http:HttpClient) { }
  getAllProducts()
  {
    return this.http.get<Product[]>(this.baseurl)
  }


  }

