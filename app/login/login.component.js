"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var login_service_1 = require("~/login/login.service");
var router_1 = require("@angular/router");
var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(page, loginService, router) {
        this.page = page;
        this.loginService = loginService;
        this.router = router;
        page.actionBarHidden = true;
    }
    LoginPageComponent.prototype.ngOnInit = function () { };
    LoginPageComponent.prototype.loginData = function () {
        this.loginService.login(this.email, this.passWord);
        if (this.email && this.passWord) {
            this.router.navigate(['/list']);
        }
    };
    LoginPageComponent = __decorate([
        core_1.Component({
            selector: 'ns-login',
            moduleId: module.id,
            templateUrl: 'login.component.html',
            styleUrls: ['login.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page,
            login_service_1.LoginService,
            router_1.Router])
    ], LoginPageComponent);
    return LoginPageComponent;
}());
exports.LoginPageComponent = LoginPageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUFxRDtBQUNyRCx1REFBcUQ7QUFDckQsMENBQXlDO0FBUXpDO0lBSUUsNEJBQ1UsSUFBVSxFQUNWLFlBQTBCLEVBQzFCLE1BQWM7UUFGZCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUV0QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUM5QixDQUFDO0lBQ0QscUNBQVEsR0FBUixjQUFZLENBQUM7SUFDYixzQ0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDbEMsQ0FBQztJQUNILENBQUM7SUFqQlUsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztTQUNuQyxDQUFDO3lDQU1nQixXQUFJO1lBQ0ksNEJBQVk7WUFDbEIsZUFBTTtPQVBiLGtCQUFrQixDQWtCOUI7SUFBRCx5QkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2UnO1xuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSAnfi9sb2dpbi9sb2dpbi5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWxvZ2luJyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICdsb2dpbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydsb2dpbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTG9naW5QYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZW1haWw6IGFueTtcbiAgcGFzc1dvcmQ6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgcHJpdmF0ZSBsb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICkge1xuICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgfVxuICBuZ09uSW5pdCgpIHt9XG4gIGxvZ2luRGF0YSgpIHtcbiAgICB0aGlzLmxvZ2luU2VydmljZS5sb2dpbih0aGlzLmVtYWlsLCB0aGlzLnBhc3NXb3JkKTtcbiAgICBpZiAodGhpcy5lbWFpbCAmJiB0aGlzLnBhc3NXb3JkKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9saXN0J10pO1xuICAgIH1cbiAgfVxufVxuIl19