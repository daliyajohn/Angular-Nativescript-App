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
                email: loginEmail,
                password: loginPassword
            }
        })
            .then(function (result) {
            backend_service_1.BackendService.token = result.uid;
            console.log(result.uid);
            return JSON.stringify(result);
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    LoginService = __decorate([
        core_1.Injectable()
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsdURBQTBEO0FBQzFELHFEQUFtRDtBQUduRDtJQUFBO0lBcUJBLENBQUM7SUFwQkMsNEJBQUssR0FBTCxVQUFNLFVBQVUsRUFBRSxhQUFhO1FBQzdCLE1BQU0sQ0FBQyxRQUFRO2FBQ1osS0FBSyxDQUFDO1lBQ0wsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUTtZQUNqQyxlQUFlLEVBQUU7Z0JBQ2YsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLFFBQVEsRUFBRSxhQUFhO2FBQ3hCO1NBQ0YsQ0FBQzthQUNELElBQUksQ0FDSCxVQUFDLE1BQVc7WUFDVixnQ0FBYyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLENBQUMsRUFDRCxVQUFDLFlBQWlCO1lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUNGLENBQUM7SUFDTixDQUFDO0lBcEJVLFlBQVk7UUFEeEIsaUJBQVUsRUFBRTtPQUNBLFlBQVksQ0FxQnhCO0lBQUQsbUJBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UnKTtcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSAnLi9iYWNrZW5kLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcbiAgbG9naW4obG9naW5FbWFpbCwgbG9naW5QYXNzd29yZCkge1xuICAgIHJldHVybiBmaXJlYmFzZVxuICAgICAgLmxvZ2luKHtcbiAgICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JELFxuICAgICAgICBwYXNzd29yZE9wdGlvbnM6IHtcbiAgICAgICAgICBlbWFpbDogbG9naW5FbWFpbCxcbiAgICAgICAgICBwYXNzd29yZDogbG9naW5QYXNzd29yZFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4oXG4gICAgICAgIChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgICAgIEJhY2tlbmRTZXJ2aWNlLnRva2VuID0gcmVzdWx0LnVpZDtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQudWlkKTtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yTWVzc2FnZTogYW55KSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxufVxuIl19