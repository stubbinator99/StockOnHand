import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { InvItem } from './inv-item';
import { INVENTORY } from './test-inventory';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor() { }
  
  getItems(): Observable<InvItem[]> {
    const items = of(INVENTORY);
    return items;
  }
}
