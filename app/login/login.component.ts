import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-login',
  moduleId: module.id,
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor(private page: Page) {
    page.actionBarHidden = true;
  }
  ngOnInit() {}
}
