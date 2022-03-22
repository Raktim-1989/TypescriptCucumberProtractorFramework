"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//var {After , Before} = require('cucumber');
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
(0, cucumber_1.Before)({ tags: "@calculatortesting" }, function () {
    //this hook will execute before foo tags
    protractor_1.browser.driver.manage().window().maximize();
});
(0, cucumber_1.After)({ tags: "@calculatortesting" }, function () {
    //this hook will execute before foo tags
    //capture screenshot after test failure
    console.log("calculator testing completes ");
});
(0, cucumber_1.Before)({ tags: "@Angulartesting" }, () => __awaiter(void 0, void 0, void 0, function* () {
    //this hook will execute before foo  & bar tags
    yield console.log("Angular wesbite execution begins");
}));
(0, cucumber_1.After)(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            //write a code to take screenshot
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob29rcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDZDQUE2QztBQUM3Qyx1Q0FBZ0Q7QUFDaEQsMkNBQXFDO0FBRXJDLElBQUEsaUJBQU0sRUFBQyxFQUFDLElBQUksRUFBRyxvQkFBb0IsRUFBQyxFQUFFO0lBRWpDLHdDQUF3QztJQUN4QyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUVqRCxDQUFDLENBQUUsQ0FBQztBQUVKLElBQUEsZ0JBQUssRUFBQyxFQUFDLElBQUksRUFBRyxvQkFBb0IsRUFBQyxFQUFFO0lBRWhDLHdDQUF3QztJQUN4Qyx1Q0FBdUM7SUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBRWxELENBQUMsQ0FBRSxDQUFDO0FBRUosSUFBQSxpQkFBTSxFQUFDLEVBQUMsSUFBSSxFQUFHLGlCQUFpQixFQUFDLEVBQUUsR0FBTyxFQUFFO0lBRXZDLCtDQUErQztJQUMvQyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUUzRCxDQUFDLENBQUEsQ0FBRSxDQUFDO0FBRUosSUFBQSxnQkFBSyxFQUFDLFVBQWdCLFFBQVE7O1FBRXZCLElBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssaUJBQU0sQ0FBQyxNQUFNLEVBQzNDO1lBQ0ksaUNBQWlDO1lBQ2pDLE1BQU0sVUFBVSxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRyxXQUFXLENBQUMsQ0FBQztTQUN6QztJQUNSLENBQUM7Q0FBQSxDQUFDLENBQUMifQ==