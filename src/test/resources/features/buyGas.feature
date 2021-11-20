
@BuyGas
Feature: As a QA, I would like to buy Gas
Background:
  Given User on the homepage

  Scenario Outline: User should be able to purchase Gas
  When User click on Buy energy button
  And Type "<Number_of_Units_Required>" and Click on Buy
  Then User should be able to see the "<Purchase_message>"

Examples:
  |Number_of_Units_Required | Purchase_message|
  |1000                     |Thank you for your purchase of 1000 units of Gas We have popped it in the post and it will be with you shortly.There are now 2000 units of Gas left in our stores.|
  |3001                     |Thank you for your purchase of 3001 units of Gas We have popped it in the post and it will be with you shortly.There are now -1 units of Gas left in our stores.  |
  |0                        |Thank you for your purchase of 0 units of Gas We have popped it in the post and it will be with you shortly.There are now 3000 units of Gas left in our stores.|
