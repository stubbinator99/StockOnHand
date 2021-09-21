import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyInventoriesComponent } from './my-inventories/my-inventories.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { InventoryComponent } from './inventory/inventory.component';

const routes: Routes = [
  { path: 'my-inventories',
      children: [
        { path: '', component: MyInventoriesComponent},
        { path: ':invName',
            children: [
              { path: '', component: InventoryComponent},
              { path: ':itemName', component: ItemDetailComponent }
        ]}          
  ]}
  
  //{ path: '', redirectTo: '/my-inventories', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }