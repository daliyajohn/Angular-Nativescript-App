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
        console.log('data');
        this.signupService.register(this.email, this.password);
        if (this.email && this.password) {
            this.router.navigate(['/list']);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQXFEO0FBQ3JELDBEQUF3RDtBQUN4RCwwQ0FBeUQ7QUFRekQ7SUFJRSw2QkFDVSxJQUFVLEVBQ1YsYUFBNEIsRUFDNUIsTUFBYztRQUZkLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRXRCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFDRCxzQ0FBUSxHQUFSLGNBQVksQ0FBQztJQUViLHdDQUFVLEdBQVY7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLENBQUM7SUFDSCxDQUFDO0lBbkJVLG1CQUFtQjtRQU4vQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDcEMsQ0FBQzt5Q0FNZ0IsV0FBSTtZQUNLLDhCQUFhO1lBQ3BCLGVBQU07T0FQYixtQkFBbUIsQ0FvQi9CO0lBQUQsMEJBQUM7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlJztcbmltcG9ydCB7IFNpZ251cFNlcnZpY2UgfSBmcm9tICd+L3NpZ251cC9zaWdudXAuc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtc2lnbnVwJyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICdzaWdudXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2lnbnVwLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTaWduVXBQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgZW1haWw6IGFueTtcbiAgcGFzc3dvcmQ6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgcHJpdmF0ZSBzaWdudXBTZXJ2aWNlOiBTaWdudXBTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcbiAgKSB7XG4gICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICB9XG4gIG5nT25Jbml0KCkge31cblxuICBzaWduVXBEYXRhKCkge1xuICAgIGNvbnNvbGUubG9nKCdkYXRhJyk7XG4gICAgdGhpcy5zaWdudXBTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMuZW1haWwsIHRoaXMucGFzc3dvcmQpO1xuICAgIGlmICh0aGlzLmVtYWlsICYmIHRoaXMucGFzc3dvcmQpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xpc3QnXSk7XG4gICAgfVxuICB9XG59XG4iXX0=