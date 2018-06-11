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
            alert(errorMessage);
        });
    };
    LoginService = __decorate([
        core_1.Injectable()
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsdURBQTBEO0FBQzFELHFEQUFtRDtBQUduRDtJQUFBO0lBcUJBLENBQUM7SUFwQkMsNEJBQUssR0FBTCxVQUFNLFVBQVUsRUFBRSxhQUFhO1FBQzdCLE1BQU0sQ0FBQyxRQUFRO2FBQ1osS0FBSyxDQUFDO1lBQ0wsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUTtZQUNqQyxlQUFlLEVBQUU7Z0JBQ2YsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLFFBQVEsRUFBRSxhQUFhO2FBQ3hCO1NBQ0YsQ0FBQzthQUNELElBQUksQ0FDSCxVQUFDLE1BQVc7WUFDVixnQ0FBYyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLENBQUMsRUFDRCxVQUFDLFlBQWlCO1lBQ2hCLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQ0YsQ0FBQztJQUNOLENBQUM7SUFwQlUsWUFBWTtRQUR4QixpQkFBVSxFQUFFO09BQ0EsWUFBWSxDQXFCeEI7SUFBRCxtQkFBQztDQUFBLEFBckJELElBcUJDO0FBckJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZScpO1xuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tICcuL2JhY2tlbmQuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dpblNlcnZpY2Uge1xuICBsb2dpbihsb2dpbkVtYWlsLCBsb2dpblBhc3N3b3JkKSB7XG4gICAgcmV0dXJuIGZpcmViYXNlXG4gICAgICAubG9naW4oe1xuICAgICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuUEFTU1dPUkQsXG4gICAgICAgIHBhc3N3b3JkT3B0aW9uczoge1xuICAgICAgICAgIGVtYWlsOiBsb2dpbkVtYWlsLFxuICAgICAgICAgIHBhc3N3b3JkOiBsb2dpblBhc3N3b3JkXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihcbiAgICAgICAgKHJlc3VsdDogYW55KSA9PiB7XG4gICAgICAgICAgQmFja2VuZFNlcnZpY2UudG9rZW4gPSByZXN1bHQudWlkO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC51aWQpO1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3JNZXNzYWdlOiBhbnkpID0+IHtcbiAgICAgICAgICBhbGVydChlcnJvck1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICApO1xuICB9XG59XG4iXX0=