"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var signup_service_1 = require("~/signup/signup.service");
var router_1 = require("@angular/router");
var SignUpPageComponent = /** @class */ (function () {
    function SignUpPageComponent(page, signupService, router) {
        this.page = page;
        this.signupService = signupService;
        this.router = router;
        page.actionBarHidden = true;
    }
    SignUpPageComponent.prototype.ngOnInit = function () { };
    SignUpPageComponent.prototype.signUpData = function () {
        this.signupService.register(this.email, this.password);
    };
    SignUpPageComponent = __decorate([
        core_1.Component({
            selector: 'ns-signup',
            moduleId: module.id,
            templateUrl: 'signup.component.html',
            styleUrls: ['signup.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page,
            signup_service_1.SignupService,
            router_1.Router])
    ], SignUpPageComponent);
    return SignUpPageComponent;
}());
exports.SignUpPageComponent = SignUpPageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQXFEO0FBQ3JELDBEQUF3RDtBQUN4RCwwQ0FBeUQ7QUFRekQ7SUFJRSw2QkFDVSxJQUFVLEVBQ1YsYUFBNEIsRUFDNUIsTUFBYztRQUZkLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRXRCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFDRCxzQ0FBUSxHQUFSLGNBQVksQ0FBQztJQUViLHdDQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBZlUsbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUNwQyxDQUFDO3lDQU1nQixXQUFJO1lBQ0ssOEJBQWE7WUFDcEIsZUFBTTtPQVBiLG1CQUFtQixDQWdCL0I7SUFBRCwwQkFBQztDQUFBLEFBaEJELElBZ0JDO0FBaEJZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2UnO1xuaW1wb3J0IHsgU2lnbnVwU2VydmljZSB9IGZyb20gJ34vc2lnbnVwL3NpZ251cC5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1zaWdudXAnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJ3NpZ251cC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzaWdudXAuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNpZ25VcFBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBlbWFpbDogYW55O1xuICBwYXNzd29yZDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICBwcml2YXRlIHNpZ251cFNlcnZpY2U6IFNpZ251cFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxuICApIHtcbiAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gIH1cbiAgbmdPbkluaXQoKSB7fVxuXG4gIHNpZ25VcERhdGEoKSB7XG4gICAgdGhpcy5zaWdudXBTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMuZW1haWwsIHRoaXMucGFzc3dvcmQpO1xuICB9XG59XG4iXX0=