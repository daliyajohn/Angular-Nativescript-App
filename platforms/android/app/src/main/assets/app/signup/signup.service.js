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
            alert(errorMessage);
        });
    };
    SignupService = __decorate([
        core_1.Injectable()
    ], SignupService);
    return SignupService;
}());
exports.SignupService = SignupService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaWdudXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyx1REFBMEQ7QUFHMUQ7SUFBQTtJQTZCQSxDQUFDO0lBNUJDLGdDQUFRLEdBQVIsVUFBUyxNQUFNLEVBQUUsU0FBUztRQUN4QixNQUFNLENBQUMsUUFBUTthQUNaLFVBQVUsQ0FBQztZQUNWLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixRQUFRLEVBQUUsU0FBUyxDQUFDLFFBQVE7U0FDN0IsQ0FBQzthQUNELElBQUksQ0FDSCxVQUFTLE1BQVc7WUFDbEIsUUFBUTtpQkFDTCxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNkLFFBQVEsRUFBRSxNQUFNLENBQUMsS0FBSztnQkFDdEIsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHO2FBQ2hCLENBQUM7aUJBQ0QsSUFBSSxDQUNILFVBQVMsTUFBVztnQkFDbEIsTUFBTSxDQUFDLE9BQU8sQ0FBQztZQUNqQixDQUFDLEVBQ0QsVUFBUyxZQUFpQjtnQkFDeEIsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FDRixDQUFDO1lBQ0osTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEMsQ0FBQyxFQUNELFVBQVMsWUFBaUI7WUFDeEIsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FDRixDQUFDO0lBQ04sQ0FBQztJQTVCVSxhQUFhO1FBRHpCLGlCQUFVLEVBQUU7T0FDQSxhQUFhLENBNkJ6QjtJQUFELG9CQUFDO0NBQUEsQUE3QkQsSUE2QkM7QUE3Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJyk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaWdudXBTZXJ2aWNlIHtcbiAgcmVnaXN0ZXIodUVtYWlsLCB1UGFzc3dvcmQpIHtcbiAgICByZXR1cm4gZmlyZWJhc2VcbiAgICAgIC5jcmVhdGVVc2VyKHtcbiAgICAgICAgZW1haWw6IHVFbWFpbC5lbWFpbCxcbiAgICAgICAgcGFzc3dvcmQ6IHVQYXNzd29yZC5wYXNzd29yZFxuICAgICAgfSlcbiAgICAgIC50aGVuKFxuICAgICAgICBmdW5jdGlvbihyZXN1bHQ6IGFueSkge1xuICAgICAgICAgIGZpcmViYXNlXG4gICAgICAgICAgICAucHVzaCgnL1VzZXJzJywge1xuICAgICAgICAgICAgICB1c2VybmFtZTogdUVtYWlsLmVtYWlsLFxuICAgICAgICAgICAgICB1aWQ6IHJlc3VsdC5rZXlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihcbiAgICAgICAgICAgICAgZnVuY3Rpb24ocmVzdWx0OiBhbnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3NhdmVkJztcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZnVuY3Rpb24oZXJyb3JNZXNzYWdlOiBhbnkpIHtcbiAgICAgICAgICAgICAgICBhbGVydChlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbihlcnJvck1lc3NhZ2U6IGFueSkge1xuICAgICAgICAgIGFsZXJ0KGVycm9yTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH1cbn1cbiJdfQ==