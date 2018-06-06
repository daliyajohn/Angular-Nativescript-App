"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ListItemService = /** @class */ (function () {
    function ListItemService() {
        this.items = new Array({ id: 1, name: 'Ter Stegen' }, { id: 3, name: 'Piqué' }, { id: 4, name: 'I. Rakitic' }, { id: 5, name: 'Sergio' }, { id: 6, name: 'Denis Suárez' }, { id: 7, name: 'Arda' }, { id: 8, name: 'A. Iniesta' }, { id: 9, name: 'Suárez' });
        // getItem(id: number): ListItem {
        //   return this.items.filter(item => item.id === id)[0];
        // }
    }
    ListItemService.prototype.getLists = function () {
        return this.items;
    };
    ListItemService = __decorate([
        core_1.Injectable()
    ], ListItemService);
    return ListItemService;
}());
exports.ListItemService = ListItemService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSTNDO0lBREE7UUFFVSxVQUFLLEdBQUcsSUFBSSxLQUFLLENBQ3ZCLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQzdCLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQ3hCLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQzdCLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQ3pCLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLEVBQy9CLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEVBQ3ZCLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQzdCLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQzFCLENBQUM7UUFNRixrQ0FBa0M7UUFDbEMseURBQXlEO1FBQ3pELElBQUk7SUFDTixDQUFDO0lBUEMsa0NBQVEsR0FBUjtRQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFkVSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7T0FDQSxlQUFlLENBbUIzQjtJQUFELHNCQUFDO0NBQUEsQUFuQkQsSUFtQkM7QUFuQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMaXN0SXRlbSB9IGZyb20gJ34vbGlzdC9saXN0LmludGVyZmFjZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMaXN0SXRlbVNlcnZpY2Uge1xuICBwcml2YXRlIGl0ZW1zID0gbmV3IEFycmF5PExpc3RJdGVtPihcbiAgICB7IGlkOiAxLCBuYW1lOiAnVGVyIFN0ZWdlbicgfSxcbiAgICB7IGlkOiAzLCBuYW1lOiAnUGlxdcOpJyB9LFxuICAgIHsgaWQ6IDQsIG5hbWU6ICdJLiBSYWtpdGljJyB9LFxuICAgIHsgaWQ6IDUsIG5hbWU6ICdTZXJnaW8nIH0sXG4gICAgeyBpZDogNiwgbmFtZTogJ0RlbmlzIFN1w6FyZXonIH0sXG4gICAgeyBpZDogNywgbmFtZTogJ0FyZGEnIH0sXG4gICAgeyBpZDogOCwgbmFtZTogJ0EuIEluaWVzdGEnIH0sXG4gICAgeyBpZDogOSwgbmFtZTogJ1N1w6FyZXonIH1cbiAgKTtcblxuICBnZXRMaXN0cygpOiBMaXN0SXRlbVtdIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcztcbiAgfVxuXG4gIC8vIGdldEl0ZW0oaWQ6IG51bWJlcik6IExpc3RJdGVtIHtcbiAgLy8gICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09PSBpZClbMF07XG4gIC8vIH1cbn1cbiJdfQ==