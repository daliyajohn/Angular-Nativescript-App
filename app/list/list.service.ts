import { Injectable } from '@angular/core';
import { ListItem } from '~/list/list.interface';

@Injectable()
export class ListItemService {
  private items = [
    { id: 1, name: 'Ter Stegen' },
    { id: 3, name: 'Piqué' },
    { id: 4, name: 'I. Rakitic' },
    { id: 5, name: 'Sergio' },
    { id: 6, name: 'Denis Suárez' },
    { id: 7, name: 'Arda' },
    { id: 8, name: 'A. Iniesta' },
    { id: 9, name: 'Suárez' }
  ];

  getLists() {
    return this.items;
  }

  // getItem(id: number): ListItem {
  //   return this.items.filter(item => item.id === id)[0];
  // }
}
