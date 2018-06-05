"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var landing_page_component_1 = require("./landing-page/landing-page.component");
var signup_component_1 = require("~/signup/signup.component");
var login_component_1 = require("~/login/login.component");
var list_component_1 = require("~/list/list.component");
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: landing_page_component_1.LandingPageComponent },
    { path: 'items', component: items_component_1.ItemsComponent },
    { path: 'item/:id', component: item_detail_component_1.ItemDetailComponent },
    { path: 'signup', component: signup_component_1.SignUpPageComponent },
    { path: 'login', component: login_component_1.LoginPageComponent },
    { path: 'list', component: list_component_1.ListComponent }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsMERBQXdEO0FBQ3hELHNFQUFtRTtBQUNuRSxnRkFBNkU7QUFDN0UsOERBQWdFO0FBQ2hFLDJEQUE2RDtBQUM3RCx3REFBc0Q7QUFFdEQsSUFBTSxNQUFNLEdBQVc7SUFDckIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUNwRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDZDQUFvQixFQUFFO0lBQ2pELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtJQUM1QyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLDJDQUFtQixFQUFFO0lBQ3BELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsc0NBQW1CLEVBQUU7SUFDbEQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxvQ0FBa0IsRUFBRTtJQUNoRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7Q0FDM0MsQ0FBQztBQU1GO0lBQUE7SUFBK0IsQ0FBQztJQUFuQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3BDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBRztJQUFELHVCQUFDO0NBQUEsQUFBaEMsSUFBZ0M7QUFBbkIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gJy4vaXRlbS9pdGVtcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gJy4vaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGFuZGluZ1BhZ2VDb21wb25lbnQgfSBmcm9tICcuL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFNpZ25VcFBhZ2VDb21wb25lbnQgfSBmcm9tICd+L3NpZ251cC9zaWdudXAuY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2luUGFnZUNvbXBvbmVudCB9IGZyb20gJ34vbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tICd+L2xpc3QvbGlzdC5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJy9ob21lJywgcGF0aE1hdGNoOiAnZnVsbCcgfSxcbiAgeyBwYXRoOiAnaG9tZScsIGNvbXBvbmVudDogTGFuZGluZ1BhZ2VDb21wb25lbnQgfSxcbiAgeyBwYXRoOiAnaXRlbXMnLCBjb21wb25lbnQ6IEl0ZW1zQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ2l0ZW0vOmlkJywgY29tcG9uZW50OiBJdGVtRGV0YWlsQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ3NpZ251cCcsIGNvbXBvbmVudDogU2lnblVwUGFnZUNvbXBvbmVudCB9LFxuICB7IHBhdGg6ICdsb2dpbicsIGNvbXBvbmVudDogTG9naW5QYWdlQ29tcG9uZW50IH0sXG4gIHsgcGF0aDogJ2xpc3QnLCBjb21wb25lbnQ6IExpc3RDb21wb25lbnQgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHt9XG4iXX0=