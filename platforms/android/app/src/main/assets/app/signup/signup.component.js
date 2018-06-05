"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var SignUpPageComponent = /** @class */ (function () {
    function SignUpPageComponent(page) {
        this.page = page;
        page.actionBarHidden = true;
    }
    SignUpPageComponent.prototype.ngOnInit = function () { };
    SignUpPageComponent = __decorate([
        core_1.Component({
            selector: 'ns-signup',
            moduleId: module.id,
            templateUrl: 'signup.component.html',
            styleUrls: ['signup.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], SignUpPageComponent);
    return SignUpPageComponent;
}());
exports.SignUpPageComponent = SignUpPageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQXFEO0FBUXJEO0lBQ0UsNkJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQzVCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQzlCLENBQUM7SUFDRCxzQ0FBUSxHQUFSLGNBQVksQ0FBQztJQUpGLG1CQUFtQjtRQU4vQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDcEMsQ0FBQzt5Q0FFMEIsV0FBSTtPQURuQixtQkFBbUIsQ0FLL0I7SUFBRCwwQkFBQztDQUFBLEFBTEQsSUFLQztBQUxZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlL3BhZ2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1zaWdudXAnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJ3NpZ251cC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzaWdudXAuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNpZ25VcFBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcbiAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gIH1cbiAgbmdPbkluaXQoKSB7fVxufVxuIl19