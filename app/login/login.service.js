"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var backend_service_1 = require("./backend.service");
var LoginService = /** @class */ (function () {
    function LoginService() {
    }
    LoginService.prototype.login = function (loginEmail, loginPassword) {
        return firebase
            .login({
            type: firebase.LoginType.PASSWORD,
            passwordOptions: {
                email: loginEmail.email,
                password: loginPassword.passWord
            }
        })
            .then(function (result) {
            backend_service_1.BackendService.token = result.uid;
            console.log(result.uid);
            return JSON.stringify(result);
        }, function (errorMessage) {
            alert(errorMessage);
        });
    };
    LoginService = __decorate([
        core_1.Injectable()
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsdURBQTBEO0FBQzFELHFEQUFtRDtBQUduRDtJQUFBO0lBcUJBLENBQUM7SUFwQkMsNEJBQUssR0FBTCxVQUFNLFVBQVUsRUFBRSxhQUFhO1FBQzdCLE1BQU0sQ0FBQyxRQUFRO2FBQ1osS0FBSyxDQUFDO1lBQ0wsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUTtZQUNqQyxlQUFlLEVBQUU7Z0JBQ2YsS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLO2dCQUN2QixRQUFRLEVBQUUsYUFBYSxDQUFDLFFBQVE7YUFDakM7U0FDRixDQUFDO2FBQ0QsSUFBSSxDQUNILFVBQUMsTUFBVztZQUNWLGdDQUFjLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxFQUNELFVBQUMsWUFBaUI7WUFDaEIsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FDRixDQUFDO0lBQ04sQ0FBQztJQXBCVSxZQUFZO1FBRHhCLGlCQUFVLEVBQUU7T0FDQSxZQUFZLENBcUJ4QjtJQUFELG1CQUFDO0NBQUEsQUFyQkQsSUFxQkM7QUFyQlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJyk7XG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gJy4vYmFja2VuZC5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExvZ2luU2VydmljZSB7XG4gIGxvZ2luKGxvZ2luRW1haWwsIGxvZ2luUGFzc3dvcmQpIHtcbiAgICByZXR1cm4gZmlyZWJhc2VcbiAgICAgIC5sb2dpbih7XG4gICAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5QQVNTV09SRCxcbiAgICAgICAgcGFzc3dvcmRPcHRpb25zOiB7XG4gICAgICAgICAgZW1haWw6IGxvZ2luRW1haWwuZW1haWwsXG4gICAgICAgICAgcGFzc3dvcmQ6IGxvZ2luUGFzc3dvcmQucGFzc1dvcmRcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKFxuICAgICAgICAocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgICBCYWNrZW5kU2VydmljZS50b2tlbiA9IHJlc3VsdC51aWQ7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LnVpZCk7XG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHJlc3VsdCk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvck1lc3NhZ2U6IGFueSkgPT4ge1xuICAgICAgICAgIGFsZXJ0KGVycm9yTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH1cbn1cbiJdfQ==