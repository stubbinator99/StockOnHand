import { Component, OnInit } from '@angular/core';
import { InvItem } from '../inv-item';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  
  inventory: InvItem[] = [];
  selectedItem?: InvItem;
  
  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.getInventory();
  }
  
  getInventory(): void {
    this.inventoryService.getItems().subscribe(items => this.inventory = items);
    // i.e.: subscribe(returned_from_getItems => variable in this component = returned_from_getItems)
  }

  onSelect(item: InvItem): void {
    this.selectedItem = item;
  }

}
