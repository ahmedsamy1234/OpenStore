import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AllItemComponent } from './all-item/all-item.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    AllItemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,MatGridListModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
