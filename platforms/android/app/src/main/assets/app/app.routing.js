"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var landing_page_component_1 = require("./landing-page/landing-page.component");
var signup_component_1 = require("~/signup/signup.component");
var login_component_1 = require("~/login/login.component");
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: landing_page_component_1.LandingPageComponent },
    { path: 'items', component: items_component_1.ItemsComponent },
    { path: 'item/:id', component: item_detail_component_1.ItemDetailComponent },
    { path: 'signup', component: signup_component_1.SignUpPageComponent },
    { path: 'login', component: login_component_1.LoginPageComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsMERBQXdEO0FBQ3hELHNFQUFtRTtBQUNuRSxnRkFBNkU7QUFDN0UsOERBQWdFO0FBQ2hFLDJEQUE2RDtBQUU3RCxJQUFNLE1BQU0sR0FBVztJQUNyQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3BELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsNkNBQW9CLEVBQUU7SUFDakQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBQzVDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsMkNBQW1CLEVBQUU7SUFDcEQsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxzQ0FBbUIsRUFBRTtJQUNsRCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLG9DQUFrQixFQUFFO0NBQ2pELENBQUM7QUFNRjtJQUFBO0lBQStCLENBQUM7SUFBbkIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUNwQyxDQUFDO09BQ1csZ0JBQWdCLENBQUc7SUFBRCx1QkFBQztDQUFBLEFBQWhDLElBQWdDO0FBQW5CLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tICcuL2l0ZW0vaXRlbXMuY29tcG9uZW50JztcbmltcG9ydCB7IEl0ZW1EZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7IExhbmRpbmdQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWduVXBQYWdlQ29tcG9uZW50IH0gZnJvbSAnfi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dpblBhZ2VDb21wb25lbnQgfSBmcm9tICd+L2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL2hvbWUnLCBwYXRoTWF0Y2g6ICdmdWxsJyB9LFxuICB7IHBhdGg6ICdob21lJywgY29tcG9uZW50OiBMYW5kaW5nUGFnZUNvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdpdGVtcycsIGNvbXBvbmVudDogSXRlbXNDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnaXRlbS86aWQnLCBjb21wb25lbnQ6IEl0ZW1EZXRhaWxDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnc2lnbnVwJywgY29tcG9uZW50OiBTaWduVXBQYWdlQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ2xvZ2luJywgY29tcG9uZW50OiBMb2dpblBhZ2VDb21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHt9XG4iXX0=