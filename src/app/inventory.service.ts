import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
//import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Inventory } from './inventory';
import { InvItem } from './inv-item';
import { INVENTORY_LIST } from './test-inventory';
//import { INVENTORY_NAMES } from './test-inventory-names';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  //private inventoryNamesUrl = 'api/inventory-names';
  //private inventoriesUrl = 'api/inventories';


  constructor(
    private http: HttpClient
  ) { }

  //rootURL = 'api/';
  rootURL = 'http://localhost:8080/StockOnHandNoAngular_war_exploded/api/';

  getInventoryNames(): Observable<string[]> {
    //const inventoryNames = of(INVENTORY_NAMES);
    //return inventoryNames;

    //return this.http.get<string[]>(this.inventoryNamesUrl);
    return this.http.get<string[]>(this.rootURL + 'my-inventories'); // + '/my-inventories');
  }

  getItem(name: string, invName: string): Observable<InvItem> {
    const inventory = INVENTORY_LIST?.find((inv: Inventory) => inv.name === invName) as Inventory;
    const item = inventory?.items?.find((i: InvItem) => i.name === name) as InvItem;
    return of(item);
  }

  getInventory(invName: string): Observable<Inventory> {
    //const inventory = INVENTORY_LIST?.find((inv: Inventory) => inv.name === invName) as Inventory;
    //return of(inventory);

    /*return this.http.get<Inventory>('localhost:8080/my-inventories/myInv');//'my-inventories/' + invName);*/
    return this.http.get<Inventory>('my-inventories/' + invName);
  }
}
