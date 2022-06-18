import { Component, OnInit } from '@angular/core';
import {SyncproductsService} from '../syncproducts.service'
@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {

  constructor(private itemsService: SyncproductsService){}



  ngOnInit(): void {
  }
allFilter()
{

  this.itemsService.DoGolbalsync()
}
  simpleFilter() 
  {

    this.itemsService.DoGolbalsyncWithSimpleproductOnly()
  }

  complexFilter() 
  {

    this.itemsService.DoGolbalsyncWithComplexproductOnly()
  }

}
