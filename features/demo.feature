Feature: I am going to validate Calculator functionalities

@calculatortesting
Scenario: Calculator Add Functionality testing

Given I will navigate to "calculator" site
When I add two numbers "3" and "5" 
Then The output displayed should be "8"

@calculatortesting
Scenario: Calculator Add Functionality testing

Given I will navigate to "calculator" site
When I add two numbers "2" and "5" 
Then The output displayed should be "7"

@Angulartesting
Scenario: Calculator Add Functionality testing

Given I will navigate to "angular" site
When I click on header link 
And I will navigate to Angular page
Then My Test successfully completes 


#CONTRL + K + C = Comment out
# CONTROL + K + U = Comment remove




  