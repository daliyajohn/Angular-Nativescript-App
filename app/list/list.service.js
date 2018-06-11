"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ListItemService = /** @class */ (function () {
    function ListItemService() {
        this.items = [
            { id: 1, name: 'Ter Stegen' },
            { id: 3, name: 'Piqué' },
            { id: 4, name: 'I. Rakitic' },
            { id: 5, name: 'Sergio' },
            { id: 6, name: 'Denis Suárez' },
            { id: 7, name: 'Arda' },
            { id: 8, name: 'A. Iniesta' },
            { id: 9, name: 'Suárez' }
        ];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSTNDO0lBREE7UUFFVSxVQUFLLEdBQUc7WUFDZCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUM3QixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtZQUN4QixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUM3QixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtZQUN6QixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRTtZQUMvQixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtZQUN2QixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUM3QixFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtTQUMxQixDQUFDO1FBTUYsa0NBQWtDO1FBQ2xDLHlEQUF5RDtRQUN6RCxJQUFJO0lBQ04sQ0FBQztJQVBDLGtDQUFRLEdBQVI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBZFUsZUFBZTtRQUQzQixpQkFBVSxFQUFFO09BQ0EsZUFBZSxDQW1CM0I7SUFBRCxzQkFBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTGlzdEl0ZW0gfSBmcm9tICd+L2xpc3QvbGlzdC5pbnRlcmZhY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGlzdEl0ZW1TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBpdGVtcyA9IFtcbiAgICB7IGlkOiAxLCBuYW1lOiAnVGVyIFN0ZWdlbicgfSxcbiAgICB7IGlkOiAzLCBuYW1lOiAnUGlxdcOpJyB9LFxuICAgIHsgaWQ6IDQsIG5hbWU6ICdJLiBSYWtpdGljJyB9LFxuICAgIHsgaWQ6IDUsIG5hbWU6ICdTZXJnaW8nIH0sXG4gICAgeyBpZDogNiwgbmFtZTogJ0RlbmlzIFN1w6FyZXonIH0sXG4gICAgeyBpZDogNywgbmFtZTogJ0FyZGEnIH0sXG4gICAgeyBpZDogOCwgbmFtZTogJ0EuIEluaWVzdGEnIH0sXG4gICAgeyBpZDogOSwgbmFtZTogJ1N1w6FyZXonIH1cbiAgXTtcblxuICBnZXRMaXN0cygpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcztcbiAgfVxuXG4gIC8vIGdldEl0ZW0oaWQ6IG51bWJlcik6IExpc3RJdGVtIHtcbiAgLy8gICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09PSBpZClbMF07XG4gIC8vIH1cbn1cbiJdfQ==