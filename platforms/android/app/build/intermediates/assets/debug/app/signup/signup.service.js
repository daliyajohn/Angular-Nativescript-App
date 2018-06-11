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
            email: uEmail.email,
            password: uPassword.password
        })
            .then(function (result) {
            console.log("success");
            firebase
                .push('/Users', {
                username: uEmail.email,
                uid: result.key
            })
                .then(function (result) {
                return 'saved';
            }, function (errorMessage) {
                alert(errorMessage);
            });
            return JSON.stringify(result);
        }, function (errorMessage) {
            console.log("error");
            alert(errorMessage);
        });
    };
    SignupService = __decorate([
        core_1.Injectable()
    ], SignupService);
    return SignupService;
}());
exports.SignupService = SignupService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaWdudXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyx1REFBMEQ7QUFHMUQ7SUFBQTtJQWdDQSxDQUFDO0lBL0JDLGdDQUFRLEdBQVIsVUFBUyxNQUFNLEVBQUUsU0FBUztRQUN4QixNQUFNLENBQUMsUUFBUTthQUNaLFVBQVUsQ0FBQztZQUNWLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixRQUFRLEVBQUUsU0FBUyxDQUFDLFFBQVE7U0FDN0IsQ0FBQzthQUNELElBQUksQ0FDSCxVQUFTLE1BQVc7WUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUN0QixRQUFRO2lCQUNMLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxLQUFLO2dCQUN0QixHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUc7YUFDaEIsQ0FBQztpQkFDRCxJQUFJLENBQ0gsVUFBUyxNQUFXO2dCQUNsQixNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ2pCLENBQUMsRUFDRCxVQUFTLFlBQWlCO2dCQUN4QixLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUNGLENBQUM7WUFDSixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxDQUFDLEVBQ0QsVUFBUyxZQUFpQjtZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1lBRXBCLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQ0YsQ0FBQztJQUNOLENBQUM7SUEvQlUsYUFBYTtRQUR6QixpQkFBVSxFQUFFO09BQ0EsYUFBYSxDQWdDekI7SUFBRCxvQkFBQztDQUFBLEFBaENELElBZ0NDO0FBaENZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZScpO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2lnbnVwU2VydmljZSB7XG4gIHJlZ2lzdGVyKHVFbWFpbCwgdVBhc3N3b3JkKSB7XG4gICAgcmV0dXJuIGZpcmViYXNlXG4gICAgICAuY3JlYXRlVXNlcih7XG4gICAgICAgIGVtYWlsOiB1RW1haWwuZW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiB1UGFzc3dvcmQucGFzc3dvcmRcbiAgICAgIH0pXG4gICAgICAudGhlbihcbiAgICAgICAgZnVuY3Rpb24ocmVzdWx0OiBhbnkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3NcIilcbiAgICAgICAgICBmaXJlYmFzZVxuICAgICAgICAgICAgLnB1c2goJy9Vc2VycycsIHtcbiAgICAgICAgICAgICAgdXNlcm5hbWU6IHVFbWFpbC5lbWFpbCxcbiAgICAgICAgICAgICAgdWlkOiByZXN1bHQua2V5XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKHJlc3VsdDogYW55KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdzYXZlZCc7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKGVycm9yTWVzc2FnZTogYW55KSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24oZXJyb3JNZXNzYWdlOiBhbnkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpXG4gICAgICAgICAgXG4gICAgICAgICAgYWxlcnQoZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxufVxuIl19