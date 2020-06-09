import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VipDetailsComponent } from './vips/vip-details/vip-details.component';
import { VipListComponent } from './vips/vip-list/vip-list.component';


@NgModule({
  declarations: [
    AppComponent,
    VipDetailsComponent,
    VipListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
