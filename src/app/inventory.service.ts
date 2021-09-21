import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Inventory } from './inventory';
import { InvItem } from './inv-item';
import { INVENTORY_LIST } from './test-inventory';
import { INVENTORY_NAMES } from './test-inventory-names';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor() { }
  
  getInventoryNames(): Observable<string[]> {
    const inventoryNames = of(INVENTORY_NAMES);
    return inventoryNames;
  }
  
  getItem(name: string, invName: string): Observable<InvItem> {
    const inventory = INVENTORY_LIST?.find((inv: Inventory) => inv.name === invName) as Inventory;
    const item = inventory?.items?.find((i: InvItem) => i.name === name) as InvItem;
    return of(item);
  }
  
  getInventory(invName: string): Observable<Inventory> {
    const inventory = INVENTORY_LIST?.find((inv: Inventory) => inv.name === invName) as Inventory;
    return of(inventory);
  }
}