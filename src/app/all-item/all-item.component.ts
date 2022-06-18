import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import {SyncproductsService} from '../syncproducts.service'

@Component({
  selector: 'app-all-item',
  templateUrl: './all-item.component.html',
  styleUrls: ['./all-item.component.css']
})
export class AllItemComponent implements OnInit {


  items: Product[] = [];
  constructor(private itemsService: SyncproductsService) { 

    this.syncAll();

  }


  ngOnInit(): void {

  }

  LocalSync(x:any)
  {

    console.log(x)
    this.itemsService.DolocalsyncById(x)

  }

  GlobalSync()
{
  this.itemsService.DoGolbalsync();
}

  syncAll(){
   this.items= this.itemsService.getAllproductUsingNoAPi();


    
  } 
}



