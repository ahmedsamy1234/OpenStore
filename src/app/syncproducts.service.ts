import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Product } from './model/product'
@Injectable({
  providedIn: 'root'
})
export class SyncproductsService {
  products: Product[] = [];

  baseurl = "https://captello.firebaseio.com/products.json";
  singleItem = "https://captello.firebaseio.com/products/"
  constructor(public http: HttpClient) { }
  fetchAllProducts() {
    return this.http.get<Product[]>(this.baseurl);


  }


  fetchProductByID(id: number) {
    return this.http.get<Product>(this.singleItem + id + ".json");

  }

  DoGolbalsyncWithComplexproductOnly()
  {

    this.fetchAllProducts().subscribe((response) => {
      this.products = [];

      response.forEach(element => {
        if (element.category=="complex")
        {
          this.products.push(element)

        }
      });
      console.log("nomemmoy");

      localStorage.removeItem('allproducts');
      localStorage.setItem("allproducts", JSON.stringify(this.products));
      location.reload();


      return JSON.parse(localStorage.getItem('allproducts') as string);


    })
  }
  DoGolbalsyncWithSimpleproductOnly()
  {

    this.fetchAllProducts().subscribe((response) => {
      this.products = [];

      response.forEach(element => {
        if (element.category=="simple")
        {
          this.products.push(element)

        }
      });
      console.log("nomemmoy");

      localStorage.removeItem('allproducts');
      localStorage.setItem("allproducts", JSON.stringify(this.products));
      location.reload();


      return JSON.parse(localStorage.getItem('allproducts') as string);


    })
  }
  DoGolbalsync() {
    this.fetchAllProducts().subscribe((response) => {
      this.products = [];
      this.products.push(...response)
      console.log("nomemmoy");

      localStorage.removeItem('allproducts');
      localStorage.setItem("allproducts", JSON.stringify(this.products));
      return JSON.parse(localStorage.getItem('allproducts') as string);


    })
  }
  DolocalsyncById(id: number) {
    if (localStorage.getItem('allproducts') == null) {
      throw new Error("You Should fetch global products Firsts");


    }
    else {


      this.products = JSON.parse(localStorage.getItem('allproducts') as string)

      for (let i = 0; i < this.products.length; i++) {

        if (this.products[i].id == id) {
          this.fetchProductByID(id).subscribe((response) => {
            this.products[i] = response

            console.log("ana Henaa");
          }
          )

          localStorage.setItem("allproducts", JSON.stringify(this.products));
          location.reload();


        }


      }

    }


  }

  getAllproductUsingNoAPi() {
    if (localStorage.getItem('allproducts') == null) {



      this.DoGolbalsync();

    }

    else {
      console.log("memmoy");
      return JSON.parse(localStorage.getItem('allproducts') as string);

    }


  }




}

