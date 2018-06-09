"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var item_service_1 = require("./item/item.service");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var landing_page_component_1 = require("./landing-page/landing-page.component");
var login_component_1 = require("~/login/login.component");
var signup_component_1 = require("~/signup/signup.component");
var list_component_1 = require("~/list/list.component");
var list_service_1 = require("~/list/list.service");
var forms_1 = require("nativescript-angular/forms");
var login_service_1 = require("~/login/login.service");
var signup_service_1 = require("~/signup/signup.service");
// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            imports: [nativescript_module_1.NativeScriptModule, app_routing_1.AppRoutingModule, forms_1.NativeScriptFormsModule],
            declarations: [
                app_component_1.AppComponent,
                items_component_1.ItemsComponent,
                item_detail_component_1.ItemDetailComponent,
                landing_page_component_1.LandingPageComponent,
                login_component_1.LoginPageComponent,
                signup_component_1.SignUpPageComponent,
                list_component_1.ListComponent
            ],
            providers: [item_service_1.ItemService, list_service_1.ListItemService, login_service_1.LoginService, signup_service_1.SignupService],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFFL0Msb0RBQWtEO0FBQ2xELDBEQUF3RDtBQUN4RCxzRUFBbUU7QUFDbkUsZ0ZBQTZFO0FBQzdFLDJEQUE2RDtBQUM3RCw4REFBZ0U7QUFDaEUsd0RBQXNEO0FBQ3RELG9EQUFzRDtBQUN0RCxvREFBcUU7QUFDckUsdURBQXFEO0FBQ3JELDBEQUF3RDtBQUV4RCwyRUFBMkU7QUFDM0Usd0VBQXdFO0FBRXhFLDZFQUE2RTtBQUM3RSxzRUFBc0U7QUFvQnRFO0lBSEE7O01BRUU7SUFDRjtJQUF3QixDQUFDO0lBQVosU0FBUztRQWxCckIsZUFBUSxDQUFDO1lBQ1IsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztZQUN6QixPQUFPLEVBQUUsQ0FBQyx3Q0FBa0IsRUFBRSw4QkFBZ0IsRUFBRSwrQkFBdUIsQ0FBQztZQUN4RSxZQUFZLEVBQUU7Z0JBQ1osNEJBQVk7Z0JBQ1osZ0NBQWM7Z0JBQ2QsMkNBQW1CO2dCQUNuQiw2Q0FBb0I7Z0JBQ3BCLG9DQUFrQjtnQkFDbEIsc0NBQW1CO2dCQUNuQiw4QkFBYTthQUNkO1lBQ0QsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSw4QkFBZSxFQUFFLDRCQUFZLEVBQUUsOEJBQWEsQ0FBQztZQUN0RSxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUM1QixDQUFDO1FBQ0Y7O1VBRUU7T0FDVyxTQUFTLENBQUc7SUFBRCxnQkFBQztDQUFBLEFBQXpCLElBQXlCO0FBQVosOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAucm91dGluZyc7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gJy4vaXRlbS9pdGVtLnNlcnZpY2UnO1xuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tICcuL2l0ZW0vaXRlbXMuY29tcG9uZW50JztcbmltcG9ydCB7IEl0ZW1EZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7IExhbmRpbmdQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dpblBhZ2VDb21wb25lbnQgfSBmcm9tICd+L2xvZ2luL2xvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaWduVXBQYWdlQ29tcG9uZW50IH0gZnJvbSAnfi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0Q29tcG9uZW50IH0gZnJvbSAnfi9saXN0L2xpc3QuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RJdGVtU2VydmljZSB9IGZyb20gJ34vbGlzdC9saXN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBMb2dpblNlcnZpY2UgfSBmcm9tICd+L2xvZ2luL2xvZ2luLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2lnbnVwU2VydmljZSB9IGZyb20gJ34vc2lnbnVwL3NpZ251cC5zZXJ2aWNlJztcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzICBpZiB5b3UgbmVlZCB0byB1c2UgdGhlIEhUVFAgd3JhcHBlclxuLy8gaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRNb2R1bGUsIEFwcFJvdXRpbmdNb2R1bGUsIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIEl0ZW1zQ29tcG9uZW50LFxuICAgIEl0ZW1EZXRhaWxDb21wb25lbnQsXG4gICAgTGFuZGluZ1BhZ2VDb21wb25lbnQsXG4gICAgTG9naW5QYWdlQ29tcG9uZW50LFxuICAgIFNpZ25VcFBhZ2VDb21wb25lbnQsXG4gICAgTGlzdENvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtJdGVtU2VydmljZSwgTGlzdEl0ZW1TZXJ2aWNlLCBMb2dpblNlcnZpY2UsIFNpZ251cFNlcnZpY2VdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG4vKlxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiJdfQ==