import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { LoginService } from '~/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ns-login',
  moduleId: module.id,
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginPageComponent implements OnInit {
  email: any;
  passWord: any;

  constructor(
    private page: Page,
    private loginService: LoginService,
    private router: Router
  ) {
    page.actionBarHidden = true;
  }
  ngOnInit() {}
  loginData() {
    this.loginService.login(this.email, this.passWord);
    if (this.email && this.passWord) {
      this.router.navigate(['/list']);
    }
  }
}
