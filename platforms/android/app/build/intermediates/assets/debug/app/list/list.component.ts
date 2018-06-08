import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { ListItemService } from '~/list/list.service';

@Component({
  selector: 'ns-list',
  moduleId: module.id,
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css']
})
export class ListComponent implements OnInit {
  public listItems: any;
  constructor(private page: Page, public listItemService: ListItemService) {
    page.actionBarHidden = true;
    this.listItems = this.listItemService.getLists();
  }
  ngOnInit() {}
}
