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

  syncAll(){
    this.itemsService.getAllProducts().subscribe((response)=>{

      this.items.push(...response)
      console.log(...this.items);


      console.log();


    
  } )
}
}


