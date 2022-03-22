// An example configuration file
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
//import * as reporter from "cucumber-html-reporter";
exports.config = {
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
    onComplete: () => {
        var reporter = require('cucumber-html-reporter');
        var options = {
            theme: 'bootstrap',
            jsonFile: './cucumberreport.json',
            output: './results.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
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
        format: 'json:./cucumberreport.json',
        strict: true,
        require: [
            './stepDefinitions/*.js'
        ],
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQ0FBZ0M7QUFDaEMsWUFBWSxDQUFDOzs7QUFFYixxREFBcUQ7QUFFMUMsUUFBQSxNQUFNLEdBQVU7SUFDdkIsNENBQTRDO0lBQzVDLGVBQWUsRUFBRSw4QkFBOEI7SUFDL0MsdUNBQXVDO0lBQ3ZDLFNBQVMsRUFBRSxRQUFRO0lBRXBCLDJDQUEyQztJQUMzQyxhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUVoRSx1QkFBdUI7SUFFckIsdURBQXVEO0lBQ3ZELFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxRQUFRO0tBQ3RCO0lBRUQsdUVBQXVFO0lBQ3ZFLDJDQUEyQztJQUMzQyxrQ0FBa0M7SUFDbEMsS0FBSyxFQUFFLENBQUMseUJBQXlCLENBQUM7SUFDbEMsVUFBVSxFQUFFLEdBQUUsRUFBRTtRQUVYLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO1FBQy9DLElBQUksT0FBTyxHQUFHO1lBQ04sS0FBSyxFQUFFLFdBQVc7WUFDbEIsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxNQUFNLEVBQUUsZ0JBQWdCO1lBQ3hCLHNCQUFzQixFQUFFLElBQUk7WUFDNUIsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUU7Z0JBQ04sYUFBYSxFQUFDLE9BQU87Z0JBQ3JCLGtCQUFrQixFQUFFLFNBQVM7Z0JBQzdCLFNBQVMsRUFBRSxzQkFBc0I7Z0JBQ2pDLFVBQVUsRUFBRSxZQUFZO2dCQUN4QixVQUFVLEVBQUUsV0FBVztnQkFDdkIsVUFBVSxFQUFFLFFBQVE7YUFDdkI7U0FFSixDQUFDO1FBRUYsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0wsWUFBWSxFQUFFO1FBQ1YsMkJBQTJCO1FBQzVCLCtCQUErQjtRQUM5QixNQUFNLEVBQUUsNEJBQTRCO1FBQ3BDLE1BQU0sRUFBRSxJQUFJO1FBQ1osT0FBTyxFQUFFO1lBQ1Asd0JBQXdCO1NBRXpCO0tBRUY7Q0FFSixDQUFDIn0=