"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var router_1 = require("@angular/router");
var SignupService = /** @class */ (function () {
    function SignupService(router) {
        this.router = router;
    }
    SignupService.prototype.register = function (uEmail, uPassword) {
        return firebase
            .createUser({
            email: uEmail,
            password: uPassword
        })
            .then(function (result) {
            firebase
                .push('/Users', {
                username: uEmail.email,
                uid: result.key
            })
                .then(function (result) {
                this.router.navigate(['/login']);
                return 'saved';
            }, function (errorMessage) {
                console.log('error');
            });
            return JSON.stringify(result);
        }, function (errorMessage) {
            console.log('error');
        });
    };
    SignupService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], SignupService);
    return SignupService;
}());
exports.SignupService = SignupService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaWdudXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyx1REFBMEQ7QUFDMUQsMENBQXlDO0FBR3pDO0lBQ0UsdUJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQztJQUN0QyxnQ0FBUSxHQUFSLFVBQVMsTUFBTSxFQUFFLFNBQVM7UUFDeEIsTUFBTSxDQUFDLFFBQVE7YUFDWixVQUFVLENBQUM7WUFDVixLQUFLLEVBQUUsTUFBTTtZQUNiLFFBQVEsRUFBRSxTQUFTO1NBQ3BCLENBQUM7YUFDRCxJQUFJLENBQ0gsVUFBUyxNQUFXO1lBQ2xCLFFBQVE7aUJBQ0wsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDZCxRQUFRLEVBQUUsTUFBTSxDQUFDLEtBQUs7Z0JBQ3RCLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRzthQUNoQixDQUFDO2lCQUNELElBQUksQ0FDSCxVQUFTLE1BQVc7Z0JBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDakMsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUNqQixDQUFDLEVBQ0QsVUFBUyxZQUFpQjtnQkFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN2QixDQUFDLENBQ0YsQ0FBQztZQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLENBQUMsRUFDRCxVQUFTLFlBQWlCO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUNGLENBQUM7SUFDTixDQUFDO0lBOUJVLGFBQWE7UUFEekIsaUJBQVUsRUFBRTt5Q0FFaUIsZUFBTTtPQUR2QixhQUFhLENBK0J6QjtJQUFELG9CQUFDO0NBQUEsQUEvQkQsSUErQkM7QUEvQlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJyk7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2lnbnVwU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XG4gIHJlZ2lzdGVyKHVFbWFpbCwgdVBhc3N3b3JkKSB7XG4gICAgcmV0dXJuIGZpcmViYXNlXG4gICAgICAuY3JlYXRlVXNlcih7XG4gICAgICAgIGVtYWlsOiB1RW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiB1UGFzc3dvcmRcbiAgICAgIH0pXG4gICAgICAudGhlbihcbiAgICAgICAgZnVuY3Rpb24ocmVzdWx0OiBhbnkpIHtcbiAgICAgICAgICBmaXJlYmFzZVxuICAgICAgICAgICAgLnB1c2goJy9Vc2VycycsIHtcbiAgICAgICAgICAgICAgdXNlcm5hbWU6IHVFbWFpbC5lbWFpbCxcbiAgICAgICAgICAgICAgdWlkOiByZXN1bHQua2V5XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKHJlc3VsdDogYW55KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdzYXZlZCc7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKGVycm9yTWVzc2FnZTogYW55KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uKGVycm9yTWVzc2FnZTogYW55KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH1cbn1cbiJdfQ==