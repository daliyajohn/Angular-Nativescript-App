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
                signup_component_1.SignUpPageComponent,
                list_component_1.ListComponent
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLDZDQUFpRDtBQUNqRCxpREFBK0M7QUFFL0Msb0RBQWtEO0FBQ2xELDBEQUF3RDtBQUN4RCxzRUFBbUU7QUFDbkUsZ0ZBQTZFO0FBQzdFLDJEQUE2RDtBQUM3RCw4REFBZ0U7QUFDaEUsd0RBQXNEO0FBRXRELDJFQUEyRTtBQUMzRSx3RUFBd0U7QUFFeEUsNkVBQTZFO0FBQzdFLHNFQUFzRTtBQW9CdEU7SUFIQTs7TUFFRTtJQUNGO0lBQXdCLENBQUM7SUFBWixTQUFTO1FBbEJyQixlQUFRLENBQUM7WUFDUixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQ3pCLE9BQU8sRUFBRSxDQUFDLHdDQUFrQixFQUFFLDhCQUFnQixDQUFDO1lBQy9DLFlBQVksRUFBRTtnQkFDWiw0QkFBWTtnQkFDWixnQ0FBYztnQkFDZCwyQ0FBbUI7Z0JBQ25CLDZDQUFvQjtnQkFDcEIsb0NBQWtCO2dCQUNsQixzQ0FBbUI7Z0JBQ25CLDhCQUFhO2FBQ2Q7WUFDRCxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO1lBQ3hCLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzVCLENBQUM7UUFDRjs7VUFFRTtPQUNXLFNBQVMsQ0FBRztJQUFELGdCQUFDO0NBQUEsQUFBekIsSUFBeUI7QUFBWiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC5yb3V0aW5nJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSAnLi9pdGVtL2l0ZW0uc2VydmljZSc7XG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gJy4vaXRlbS9pdGVtcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gJy4vaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGFuZGluZ1BhZ2VDb21wb25lbnQgfSBmcm9tICcuL2xhbmRpbmctcGFnZS9sYW5kaW5nLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2luUGFnZUNvbXBvbmVudCB9IGZyb20gJ34vbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IFNpZ25VcFBhZ2VDb21wb25lbnQgfSBmcm9tICd+L3NpZ251cC9zaWdudXAuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RDb21wb25lbnQgfSBmcm9tICd+L2xpc3QvbGlzdC5jb21wb25lbnQnO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0d28td2F5IGJpbmRpbmdcbi8vIGltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbi8vIFVuY29tbWVudCBhbmQgYWRkIHRvIE5nTW9kdWxlIGltcG9ydHMgIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSFRUUCB3cmFwcGVyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcblxuQE5nTW9kdWxlKHtcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW05hdGl2ZVNjcmlwdE1vZHVsZSwgQXBwUm91dGluZ01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICBJdGVtc0NvbXBvbmVudCxcbiAgICBJdGVtRGV0YWlsQ29tcG9uZW50LFxuICAgIExhbmRpbmdQYWdlQ29tcG9uZW50LFxuICAgIExvZ2luUGFnZUNvbXBvbmVudCxcbiAgICBTaWduVXBQYWdlQ29tcG9uZW50LFxuICAgIExpc3RDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbSXRlbVNlcnZpY2VdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG4vKlxuUGFzcyB5b3VyIGFwcGxpY2F0aW9uIG1vZHVsZSB0byB0aGUgYm9vdHN0cmFwTW9kdWxlIGZ1bmN0aW9uIGxvY2F0ZWQgaW4gbWFpbi50cyB0byBzdGFydCB5b3VyIGFwcFxuKi9cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiJdfQ==