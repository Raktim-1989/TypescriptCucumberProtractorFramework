//var {After , Before} = require('cucumber');
import {After ,Before, Status } from "cucumber";
import { browser } from "protractor";

Before({tags : "@calculatortesting"} ,function()
{
     //this hook will execute before foo tags
     browser.driver.manage().window().maximize();

} );

After({tags : "@calculatortesting"} ,function()
{
     //this hook will execute before foo tags
     //capture screenshot after test failure
     console.log("calculator testing completes ");

} );

Before({tags : "@Angulartesting"} ,async()=>
{
     //this hook will execute before foo  & bar tags
     await console.log("Angular wesbite execution begins");

} );

After(async function (scenario )
{
       if(scenario.result.status === Status.FAILED)
       {
           //write a code to take screenshot
           const screenshot = await browser.takeScreenshot();
           this.attach(screenshot , "image/png"); 
       }
});
