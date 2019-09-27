Feature: Calculator Functionality

   Testing Calculator Functionality
   
Scenario: Verify calculator operations 1
Given Calculator home page
When I try to add "4" and "5"
Then the sum displayed should be "9"

Scenario: Verify calculator operations 2
Given Calculator home page
When I try to add "3" and "4"
Then the sum displayed should be "7"