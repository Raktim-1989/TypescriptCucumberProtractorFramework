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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const calculator_1 = require("../pageobjects/calculator");
const protractor_1 = require("protractor");
const angularhome_1 = require("../pageobjects/angularhome");
const chai_1 = __importDefault(require("chai"));
let obj = new calculator_1.calculator();
let angobj = new angularhome_1.angularhomepage();
var expect = chai_1.default.expect;
(0, cucumber_1.Given)('I will navigate to {string} site', (string) => __awaiter(void 0, void 0, void 0, function* () {
    if (string == "calculator") {
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
    }
    else if (string == "angular") {
        yield protractor_1.browser.get('https://angularjs.org');
    }
}));
(0, cucumber_1.When)('I add two numbers {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    //let obj = new calculator();
    yield obj.firsteditbox.sendKeys(string);
    yield obj.secondeditbox.sendKeys(string2);
}));
(0, cucumber_1.Then)('The output displayed should be {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield obj.go.click();
    yield obj.getresult.getText().then(function (text) {
        console.log(text);
        expect(text.toString()).to.equal(string);
    });
}));
(0, cucumber_1.When)('I click on header link', () => __awaiter(void 0, void 0, void 0, function* () {
    yield angobj.angularlink.click();
}));
(0, cucumber_1.When)('I will navigate to Angular page', () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(5000).then(function () {
        console.log("started");
    });
}));
(0, cucumber_1.Then)('My Test successfully completes', () => __awaiter(void 0, void 0, void 0, function* () {
    yield console.log("test successful !!");
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzdGVwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUEyQztBQUMzQywwREFBdUQ7QUFDdkQsMkNBQW9DO0FBQ3BDLDREQUE2RDtBQUM3RCxnREFBd0I7QUFFeEIsSUFBSSxHQUFHLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7QUFDM0IsSUFBSSxNQUFNLEdBQUcsSUFBSSw2QkFBZSxFQUFFLENBQUM7QUFDbkMsSUFBSSxNQUFNLEdBQUcsY0FBSSxDQUFDLE1BQU0sQ0FBQztBQUV2QixJQUFBLGdCQUFLLEVBQUMsa0NBQWtDLEVBQUUsQ0FBTyxNQUFNLEVBQUMsRUFBRTtJQUNyRCxJQUFHLE1BQU0sSUFBSSxZQUFZLEVBQ3pCO1FBQ0MsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO0tBQy9EO1NBQ0ksSUFBRyxNQUFNLElBQUksU0FBUyxFQUMzQjtRQUNDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztLQUMzQztBQUVOLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxJQUFBLGVBQUksRUFBQyx5Q0FBeUMsRUFBRyxDQUFNLE1BQU0sRUFBRSxPQUFPLEVBQUMsRUFBRTtJQUV2RSw2QkFBNkI7SUFDN0IsTUFBTSxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxNQUFNLEdBQUcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRTNDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDSCxJQUFBLGVBQUksRUFBQyx5Q0FBeUMsRUFBRSxDQUFPLE1BQU0sRUFBQyxFQUFFO0lBQzlELE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QixNQUFNLEdBQUcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtRQUUxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BELENBQUMsQ0FBQyxDQUFBO0FBRVosQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILElBQUEsZUFBSSxFQUFDLHdCQUF3QixFQUFFLEdBQVEsRUFBRTtJQUV2QyxNQUFNLE1BQU0sQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7QUFFbkMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILElBQUEsZUFBSSxFQUFDLGlDQUFpQyxFQUFFLEdBQVEsRUFBRTtJQUNoRCxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztRQUV6QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzVCLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILElBQUEsZUFBSSxFQUFDLGdDQUFnQyxFQUFFLEdBQVEsRUFBRTtJQUMvQyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQTtBQUN6QyxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=