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
const protractor_1 = require("protractor");
const protractor_2 = require("protractor");
const angularhome_1 = require("./pageobjects/angularhome");
const calculator_1 = require("./pageobjects/calculator");
describe('Chain Locators Demo', () => {
    it('Locators', () => __awaiter(void 0, void 0, void 0, function* () {
        //write your real proractor code 
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        let obj = new calculator_1.calculator();
        //repeater , chain locators and CSS for identical tags 
        yield obj.firsteditbox.sendKeys("3");
        yield obj.secondeditbox.sendKeys("10");
        yield obj.go.click();
        yield obj.firsteditbox.sendKeys("4");
        yield obj.secondeditbox.sendKeys("10");
        yield obj.go.click();
        obj.getresult.count().then(function (text) {
            console.log(text);
        });
        obj.getresult.each(function (item) {
            item.element(protractor_2.by.css("td:nth-child(3)")).getText().then(function (text) {
                console.log(text);
            });
        });
    }));
    it('Angular home page title validation', () => __awaiter(void 0, void 0, void 0, function* () {
        //write your real proractor code 
        yield protractor_1.browser.get("https://angularjs.org");
        let angobj = new angularhome_1.angularhomepage();
        yield angobj.angularlink.click();
        protractor_1.browser.sleep(5000).then(function () {
            console.log("started");
        });
        // await element(by.css("input[type = 'search']")).sendKeys("hello");
    }));
});
//first parameter is the 'testsuite' name and seocnd parameter is function() which will be having 
//it blocks , i.e. test cases 
//it block , first paramter testcase name 		
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFtQztBQUNuQywyQ0FBdUM7QUFDdkMsMkRBQTREO0FBQzVELHlEQUFzRDtBQUV0RCxRQUFRLENBQUMscUJBQXFCLEVBQUcsR0FBRSxFQUFFO0lBRzVCLEVBQUUsQ0FBQyxVQUFVLEVBQUcsR0FBTyxFQUFFO1FBRXRCLGlDQUFpQztRQUNuQyxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFFekQsSUFBSSxHQUFHLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7UUFDakMsdURBQXVEO1FBQ3ZELE1BQU0sR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckMsTUFBTSxHQUFHLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFckIsTUFBTSxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQyxNQUFNLEdBQUcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUdyQixHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7WUFFeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQTtRQUliLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVMsSUFBSTtZQUVuQixJQUFJLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7Z0JBRXJELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUE7UUFDYixDQUFDLENBQUMsQ0FBQTtJQUdSLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFDTixFQUFFLENBQUMsb0NBQW9DLEVBQUcsR0FBUSxFQUFFO1FBR3BELGlDQUFpQztRQUMxQixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDM0MsSUFBSSxNQUFNLEdBQUcsSUFBSSw2QkFBZSxFQUFFLENBQUM7UUFDbkMsTUFBTSxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2pDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztZQUVuQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQzVCLENBQUMsQ0FBQyxDQUFDO1FBQ0oscUVBQXFFO0lBQ3hFLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFHVixDQUFDLENBQUMsQ0FBQztBQUVMLGtHQUFrRztBQUNsRyw4QkFBOEI7QUFHOUIsNENBQTRDIn0=