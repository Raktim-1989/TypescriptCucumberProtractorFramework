import {Given, When, Then} from "cucumber";
import { calculator } from "../pageobjects/calculator";
import { browser} from "protractor";
import { angularhomepage } from "../pageobjects/angularhome";
import chai from "chai";

let obj = new calculator();
let angobj = new angularhomepage();
var expect = chai.expect;

  Given('I will navigate to {string} site', async (string)=> {
       if(string == "calculator")
       {
        await browser.get('http://juliemr.github.io/protractor-demo/');
       }
       else if(string == "angular")
       {
        await browser.get('https://angularjs.org');
       }

  });

  When('I add two numbers {string} and {string}',  async(string, string2)=> {
    
    //let obj = new calculator();
    await obj.firsteditbox.sendKeys(string);
	  await obj.secondeditbox.sendKeys(string2);
    
  });
  Then('The output displayed should be {string}', async (string)=> {
    await obj.go.click();	   	
	await obj.getresult.getText().then(function(text)
            {
                       console.log(text);
                       expect(text.toString()).to.equal(string);
            })
    
  });

  When('I click on header link', async ()=> {
    
    await angobj.angularlink.click();

  });

  When('I will navigate to Angular page', async ()=> {
    await browser.sleep(5000).then(function()
    {
          console.log("started")
    });
  });

  Then('My Test successfully completes', async ()=> {
    await console.log("test successful !!")
  });


