import {browser} from "protractor";
import {element, by} from "protractor";
import { angularhomepage } from "./pageobjects/angularhome";
import { calculator } from "./pageobjects/calculator";

describe('Chain Locators Demo' , ()=>
		{
	
	        it('Locators' , async()=>
	        		{
	        	  //write your real proractor code 
	        	await browser.get('http://juliemr.github.io/protractor-demo/');

                let obj = new calculator();
	        	//repeater , chain locators and CSS for identical tags 
	        	await obj.firsteditbox.sendKeys("3");
	        	await obj.secondeditbox.sendKeys("10");
	        	await obj.go.click();	
	        	
	        	await obj.firsteditbox.sendKeys("4");
	        	await obj.secondeditbox.sendKeys("10");
	        	await obj.go.click();	
	        	
	     	  
	        	obj.getresult.count().then(function(text)
	        			{
	        		               console.log(text);
	        	        })
	        	     	
	        
	        
	      obj.getresult.each(function(item)
	        		{
	        	          item.element(by.css("td:nth-child(3)")).getText().then(function(text)
	        	        		  {
	        	          	              console.log(text);
	        	                  })
	                })
	        
	        		
	        		})
	      it('Angular home page title validation' , async() =>
	    		   {
	    	      
	    	 //write your real proractor code 
              await browser.get("https://angularjs.org");
              let angobj = new angularhomepage();
              await angobj.angularlink.click();
              browser.sleep(5000).then(function()
              {
                    console.log("started")
              });
             // await element(by.css("input[type = 'search']")).sendKeys("hello");
	    		   })    		
	
	
		});
		
//first parameter is the 'testsuite' name and seocnd parameter is function() which will be having 
//it blocks , i.e. test cases 
		

//it block , first paramter testcase name 		