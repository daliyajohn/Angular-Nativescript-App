import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { SignupService } from '~/signup/signup.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ns-signup',
  moduleId: module.id,
  templateUrl: 'signup.component.html',
  styleUrls: ['signup.component.css']
})
export class SignUpPageComponent implements OnInit {
  email: any;
  password: any;

  constructor(
    private page: Page,
    private signupService: SignupService,
    private router: Router
  ) {
    page.actionBarHidden = true;
  }
  ngOnInit() {}

  signUpData() {
    console.log('data');
    this.signupService.register(this.email, this.password);
    if (this.email && this.password) {
      this.router.navigate(['/list']);
    }
  }
}
