import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-list',
  moduleId: module.id,
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css']
})
export class ListComponent implements OnInit {
  constructor(private page: Page) {
    page.actionBarHidden = true;
  }
  ngOnInit() {}
}
