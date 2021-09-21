import { InvItem } from './inv-item';

export interface Inventory {
  [x: string]: any;
  name: string;
  items?: InvItem[]; //NOTE: might not need '?'
}