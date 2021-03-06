import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';

import { ItemService } from './item/item.service';
import { ItemsComponent } from './item/items.component';
import { ItemDetailComponent } from './item/item-detail.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from '~/login/login.component';
import { SignUpPageComponent } from '~/signup/signup.component';
import { ListComponent } from '~/list/list.component';
import { ListItemService } from '~/list/list.service';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { LoginService } from '~/login/login.service';
import { SignupService } from '~/signup/signup.service';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, NativeScriptFormsModule],
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemDetailComponent,
    LandingPageComponent,
    LoginPageComponent,
    SignUpPageComponent,
    ListComponent
  ],
  providers: [ItemService, ListItemService, LoginService, SignupService],
  schemas: [NO_ERRORS_SCHEMA]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule {}
