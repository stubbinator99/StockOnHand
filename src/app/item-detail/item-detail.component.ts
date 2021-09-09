import { Component, OnInit, Input } from '@angular/core';
import { InvItem} from '../inv-item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
	@Input() item?: InvItem;

  constructor() { }

  ngOnInit(): void {
  }

}
