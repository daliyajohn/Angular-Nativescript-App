"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var list_service_1 = require("~/list/list.service");
var ListComponent = /** @class */ (function () {
    function ListComponent(page, listItemService) {
        this.page = page;
        this.listItemService = listItemService;
        page.actionBarHidden = true;
        // this.listItems = this.listItemService.getLists();
        // console.log('gggfgf', this.listItems);
    }
    ListComponent.prototype.ngOnInit = function () { };
    ListComponent.prototype.addProduct = function () { };
    ListComponent = __decorate([
        core_1.Component({
            selector: 'ns-list',
            moduleId: module.id,
            templateUrl: 'list.component.html',
            styleUrls: ['list.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page, list_service_1.ListItemService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBcUQ7QUFDckQsb0RBQXNEO0FBUXREO0lBR0UsdUJBQW9CLElBQVUsRUFBUyxlQUFnQztRQUFuRCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ3JFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQzVCLG9EQUFvRDtRQUNwRCx5Q0FBeUM7SUFDM0MsQ0FBQztJQUNELGdDQUFRLEdBQVIsY0FBWSxDQUFDO0lBRWIsa0NBQVUsR0FBVixjQUFjLENBQUM7SUFWSixhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHFCQUFxQjtZQUNsQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztTQUNsQyxDQUFDO3lDQUkwQixXQUFJLEVBQTBCLDhCQUFlO09BSDVELGFBQWEsQ0FXekI7SUFBRCxvQkFBQztDQUFBLEFBWEQsSUFXQztBQVhZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG5pbXBvcnQgeyBMaXN0SXRlbVNlcnZpY2UgfSBmcm9tICd+L2xpc3QvbGlzdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnMtbGlzdCcsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydsaXN0LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgYWRkUHJvZHVjdHM6IGFueTtcbiAgcHVibGljIGxpc3RJdGVtczogYW55O1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHB1YmxpYyBsaXN0SXRlbVNlcnZpY2U6IExpc3RJdGVtU2VydmljZSkge1xuICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAvLyB0aGlzLmxpc3RJdGVtcyA9IHRoaXMubGlzdEl0ZW1TZXJ2aWNlLmdldExpc3RzKCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2dnZ2ZnZicsIHRoaXMubGlzdEl0ZW1zKTtcbiAgfVxuICBuZ09uSW5pdCgpIHt9XG5cbiAgYWRkUHJvZHVjdCgpIHt9XG59XG4iXX0=