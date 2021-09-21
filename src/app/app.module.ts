import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { InventoryComponent } from './inventory/inventory.component';
import { MyInventoriesComponent } from './my-inventories/my-inventories.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ItemDetailComponent,
    InventoryComponent,
    MyInventoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }