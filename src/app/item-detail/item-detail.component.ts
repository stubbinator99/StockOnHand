import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { InvItem } from '../inv-item';

import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
	@Input() item?: InvItem;

  constructor(
    private route: ActivatedRoute,
    private inventoryService: InventoryService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getItem();
    console.log("Got item" + this.item?.name);
  }
  
  getItem(): void {
    const itemName = String(this.route.snapshot.paramMap.get('itemName'));
    const invName = String(this.route.snapshot.paramMap.get('invName'));
    this.inventoryService.getItem(itemName, invName)
      .subscribe((item: InvItem) => this.item = item);
  }
  
  goBack(): void {
    this.location.back();
  }

}