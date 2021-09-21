import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Inventory } from '../inventory';
import { InvItem } from '../inv-item';

import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  
  inventoryNames: string[] = [];
  inventory: Inventory = {name:'name', items:[] as InvItem[] };
  
  constructor(
    private route: ActivatedRoute,
    private inventoryService: InventoryService,
    private location: Location) { }

  ngOnInit(): void {
    console.log("Loading Inventory Component");
    this.getInventory();
  }
  
  getInventory(): void {
    const invName = String(this.route.snapshot.paramMap.get('invName'));
    this.inventoryService.getInventory(invName)
      .subscribe((inventory: Inventory) => this.inventory = inventory);
  }
  
  goBack(): void {
    this.location.back();
  }
}