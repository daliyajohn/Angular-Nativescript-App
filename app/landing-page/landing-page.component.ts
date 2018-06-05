import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
  selector: 'ns-landing',
  moduleId: module.id,
  templateUrl: 'landing-page.component.html',
  styleUrls: ['landing.component.css']
})
export class LandingPageComponent implements OnInit {
  constructor(private page: Page) {
    page.actionBarHidden = true;
  }
  ngOnInit() {}
}
