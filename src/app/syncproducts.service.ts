import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Product } from './model/product'
@Injectable({
  providedIn: 'root'
})
export class SyncproductsService {
  products:Product[]=[];

  baseurl="https://captello.firebaseio.com/products.json";
  singleItem="https://captello.firebaseio.com/products/"
  constructor(public http:HttpClient) { }
  fetchAllProducts()
  {
    return this.http.get<Product[]>(this.baseurl);

 
  }
    
  
  getProductByID(id: string)
  {
    return this.http.get<Product>(this.baseurl+id+".json");

  }

  getAllproductUsingNoAPi()
{
  if (localStorage.getItem('allproducts') == null)
  {
  this.fetchAllProducts().subscribe((response)=>{

      this.products.push(...response)
      console.log("nomemmoy");
        localStorage.setItem("allproducts", JSON.stringify(this.products));
      return JSON.parse(localStorage.getItem('allproducts') as string);
      })
    }

      else 
      {
        console.log("memmoy");
        return JSON.parse(localStorage.getItem('allproducts') as string);

      }



  

  }

      


  }

