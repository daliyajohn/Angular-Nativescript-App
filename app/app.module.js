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
            imports: [nativescript_module_1.NativeScriptModule, app_routing_1.AppRoutingModule],
            declarations: [
                app_component_1.AppComponent,
                items_component_1.ItemsComponent,
                item_detail_component_1.ItemDetailComponent,
                landing_page_component_1.LandingPageComponent,
                login_component_1.LoginPageComponent,
                signup_component_1.SignUpPageComponent
            ],
            providers: [item_service_1.ItemService],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFFL0Msb0RBQWtEO0FBQ2xELDBEQUF3RDtBQUN4RCxzRUFBbUU7QUFDbkUsZ0ZBQTZFO0FBQzdFLDJEQUE2RDtBQUM3RCw4REFBZ0U7QUFFaEUsMkVBQTJFO0FBQzNFLHdFQUF3RTtBQUV4RSw2RUFBNkU7QUFDN0Usc0VBQXNFO0FBbUJ0RTtJQUhBOztNQUVFO0lBQ0Y7SUFBd0IsQ0FBQztJQUFaLFNBQVM7UUFqQnJCLGVBQVEsQ0FBQztZQUNSLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDekIsT0FBTyxFQUFFLENBQUMsd0NBQWtCLEVBQUUsOEJBQWdCLENBQUM7WUFDL0MsWUFBWSxFQUFFO2dCQUNaLDRCQUFZO2dCQUNaLGdDQUFjO2dCQUNkLDJDQUFtQjtnQkFDbkIsNkNBQW9CO2dCQUNwQixvQ0FBa0I7Z0JBQ2xCLHNDQUFtQjthQUNwQjtZQUNELFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7WUFDeEIsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7U0FDNUIsQ0FBQztRQUNGOztVQUVFO09BQ1csU0FBUyxDQUFHO0lBQUQsZ0JBQUM7Q0FBQSxBQUF6QixJQUF5QjtBQUFaLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gJy4vYXBwLnJvdXRpbmcnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcblxuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tICcuL2l0ZW0vaXRlbS5zZXJ2aWNlJztcbmltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSAnLi9pdGVtL2l0ZW1zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMYW5kaW5nUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTG9naW5QYWdlQ29tcG9uZW50IH0gZnJvbSAnfi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2lnblVwUGFnZUNvbXBvbmVudCB9IGZyb20gJ34vc2lnbnVwL3NpZ251cC5jb21wb25lbnQnO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSFRUUCB3cmFwcGVyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcblxuQE5nTW9kdWxlKHtcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdE1vZHVsZSwgQXBwUm91dGluZ01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICBJdGVtc0NvbXBvbmVudCxcbiAgICBJdGVtRGV0YWlsQ29tcG9uZW50LFxuICAgIExhbmRpbmdQYWdlQ29tcG9uZW50LFxuICAgIExvZ2luUGFnZUNvbXBvbmVudCxcbiAgICBTaWduVXBQYWdlQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW0l0ZW1TZXJ2aWNlXSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuLypcblBhc3MgeW91ciBhcHBsaWNhdGlvbiBtb2R1bGUgdG8gdGhlIGJvb3RzdHJhcE1vZHVsZSBmdW5jdGlvbiBsb2NhdGVkIGluIG1haW4udHMgdG8gc3RhcnQgeW91ciBhcHBcbiovXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHt9XG4iXX0=