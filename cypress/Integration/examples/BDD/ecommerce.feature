Feature: End to end e-commerce validation
@Regression
Scenario: Ecommerce product delivery 
Given I am on ecommerce page
When I login into application
And I add item to Cart and checkout
And validate the total price limit 
Then Select the country submit and verify Thankyou

@Smoke
Scenario Outline: Scenario Outline name: Ecommerce product delivery 
Given I am on ecommerce page
When I login into application portal
|username          | password |
|rahulshettyacademy| learning |
And I add item to Cart and checkout
And validate the total price limit 
Then Select the country submit and verify Thankyou