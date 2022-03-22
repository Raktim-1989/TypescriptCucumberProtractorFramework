// An example configuration file
'use strict';
import {Config} from "protractor";
//import * as reporter from "cucumber-html-reporter";

export let config:Config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // set to "custom" instead of cucumber.
    framework: 'custom',

   // path relative to the current config file
   frameworkPath: require.resolve('protractor-cucumber-framework'),

  // directConnect: true,
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },
  
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['./features/demo.feature'],
    onComplete: ()=>
        {
         var reporter = require('cucumber-html-reporter')
          var options = {
                  theme: 'bootstrap',
                  jsonFile: './cucumberreport.json',
                  output: './results.html',
                  reportSuiteAsScenarios: true,
                  scenarioTimestamp: true,
                  launchReport: true,
                  metadata: {
                      "App Version":"0.3.2",
                      "Test Environment": "STAGING",
                      "Browser": "Chrome  54.0.2840.98",
                      "Platform": "Windows 10",
                      "Parallel": "Scenarios",
                      "Executed": "Remote"
                  },
                  
              };
          
              reporter.generate(options);
        },
    cucumberOpts: {
        // require step definitions
       // tags: "@calculatortesting" ,
        format: 'json:./cucumberreport.json' ,
        strict: true,
        require: [
          './stepDefinitions/*.js' 

        ],
        
      }
  
  };