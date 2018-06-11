"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var SignupService = /** @class */ (function () {
    function SignupService() {
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
        core_1.Injectable()
    ], SignupService);
    return SignupService;
}());
exports.SignupService = SignupService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaWdudXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyx1REFBMEQ7QUFHMUQ7SUFBQTtJQTZCQSxDQUFDO0lBNUJDLGdDQUFRLEdBQVIsVUFBUyxNQUFNLEVBQUUsU0FBUztRQUN4QixNQUFNLENBQUMsUUFBUTthQUNaLFVBQVUsQ0FBQztZQUNWLEtBQUssRUFBRSxNQUFNO1lBQ2IsUUFBUSxFQUFFLFNBQVM7U0FDcEIsQ0FBQzthQUNELElBQUksQ0FDSCxVQUFTLE1BQVc7WUFDbEIsUUFBUTtpQkFDTCxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNkLFFBQVEsRUFBRSxNQUFNLENBQUMsS0FBSztnQkFDdEIsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHO2FBQ2hCLENBQUM7aUJBQ0QsSUFBSSxDQUNILFVBQVMsTUFBVztnQkFDbEIsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUNqQixDQUFDLEVBQ0QsVUFBUyxZQUFpQjtnQkFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN2QixDQUFDLENBQ0YsQ0FBQztZQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLENBQUMsRUFDRCxVQUFTLFlBQWlCO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUNGLENBQUM7SUFDTixDQUFDO0lBNUJVLGFBQWE7UUFEekIsaUJBQVUsRUFBRTtPQUNBLGFBQWEsQ0E2QnpCO0lBQUQsb0JBQUM7Q0FBQSxBQTdCRCxJQTZCQztBQTdCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNpZ251cFNlcnZpY2Uge1xuICByZWdpc3Rlcih1RW1haWwsIHVQYXNzd29yZCkge1xuICAgIHJldHVybiBmaXJlYmFzZVxuICAgICAgLmNyZWF0ZVVzZXIoe1xuICAgICAgICBlbWFpbDogdUVtYWlsLFxuICAgICAgICBwYXNzd29yZDogdVBhc3N3b3JkXG4gICAgICB9KVxuICAgICAgLnRoZW4oXG4gICAgICAgIGZ1bmN0aW9uKHJlc3VsdDogYW55KSB7XG4gICAgICAgICAgZmlyZWJhc2VcbiAgICAgICAgICAgIC5wdXNoKCcvVXNlcnMnLCB7XG4gICAgICAgICAgICAgIHVzZXJuYW1lOiB1RW1haWwuZW1haWwsXG4gICAgICAgICAgICAgIHVpZDogcmVzdWx0LmtleVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgICBmdW5jdGlvbihyZXN1bHQ6IGFueSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnc2F2ZWQnO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBmdW5jdGlvbihlcnJvck1lc3NhZ2U6IGFueSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbihlcnJvck1lc3NhZ2U6IGFueSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpO1xuICAgICAgICB9XG4gICAgICApO1xuICB9XG59XG4iXX0=