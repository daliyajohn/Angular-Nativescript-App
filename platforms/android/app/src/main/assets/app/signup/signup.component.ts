import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-signup',
  moduleId: module.id,
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css']
})
export class SignUpPageComponent implements OnInit {
  constructor(private page: Page) {
    page.actionBarHidden = true;
  }
  ngOnInit() {}
}
