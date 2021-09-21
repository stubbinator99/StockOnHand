import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-my-inventories',
  templateUrl: './my-inventories.component.html',
  styleUrls: ['./my-inventories.component.scss']
})
export class MyInventoriesComponent implements OnInit {
  
  inventoryNames: string[] = [];
  
  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.getInventoryNames();
  }
  
  getInventoryNames(): void {
    this.inventoryService.getInventoryNames().subscribe(fetchedNames => this.inventoryNames = fetchedNames);
  }

}