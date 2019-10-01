Feature: Calculator Functionality

   Testing Calculator Functionality
   
@even
Scenario: Verify calculator operations 1
Given Calculator home page
When I try to add "2" and "6"
Then the sum displayed should be "8"

@odd
Scenario: Verify calculator operations 2
Given Calculator home page
When I try to add "3" and "5"
Then the sum displayed should be "8"