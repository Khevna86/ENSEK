$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/buyGas.feature");
formatter.feature({
  "line": 3,
  "name": "As a QA, I would like to buy Gas",
  "description": "",
  "id": "as-a-qa,-i-would-like-to-buy-gas",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@BuyGas"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "User should be able to purchase Gas",
  "description": "",
  "id": "as-a-qa,-i-would-like-to-buy-gas;user-should-be-able-to-purchase-gas",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 8,
  "name": "User click on Buy energy button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Type \"\u003cNumber_of_Units_Required\u003e\" and Click on Buy",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be able to see the \"\u003cPurchase_message\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "as-a-qa,-i-would-like-to-buy-gas;user-should-be-able-to-purchase-gas;",
  "rows": [
    {
      "cells": [
        "Number_of_Units_Required",
        "Purchase_message"
      ],
      "line": 13,
      "id": "as-a-qa,-i-would-like-to-buy-gas;user-should-be-able-to-purchase-gas;;1"
    },
    {
      "cells": [
        "1000",
        "Thank you for your purchase of 1000 units of Gas We have popped it in the post and it will be with you shortly.There are now 2000 units of Gas left in our stores."
      ],
      "line": 14,
      "id": "as-a-qa,-i-would-like-to-buy-gas;user-should-be-able-to-purchase-gas;;2"
    },
    {
      "cells": [
        "3001",
        "Thank you for your purchase of 3001 units of Gas We have popped it in the post and it will be with you shortly.There are now -1 units of Gas left in our stores."
      ],
      "line": 15,
      "id": "as-a-qa,-i-would-like-to-buy-gas;user-should-be-able-to-purchase-gas;;3"
    },
    {
      "cells": [
        "0",
        "Thank you for your purchase of 0 units of Gas We have popped it in the post and it will be with you shortly.There are now 3000 units of Gas left in our stores."
      ],
      "line": 16,
      "id": "as-a-qa,-i-would-like-to-buy-gas;user-should-be-able-to-purchase-gas;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16670113900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDefs.user_on_the_homepage()"
});
formatter.result({
  "duration": 1076326100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User should be able to purchase Gas",
  "description": "",
  "id": "as-a-qa,-i-would-like-to-buy-gas;user-should-be-able-to-purchase-gas;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@BuyGas"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User click on Buy energy button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Type \"1000\" and Click on Buy",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be able to see the \"Thank you for your purchase of 1000 units of Gas We have popped it in the post and it will be with you shortly.There are now 2000 units of Gas left in our stores.\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_click_on_Buy_energy_button()"
});
formatter.result({
  "duration": 1375115700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 6
    }
  ],
  "location": "MyStepDefs.typeAndClickOnBuy(String)"
});
formatter.result({
  "duration": 1047921300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thank you for your purchase of 1000 units of Gas We have popped it in the post and it will be with you shortly.There are now 2000 units of Gas left in our stores.",
      "offset": 32
    }
  ],
  "location": "MyStepDefs.user_should_be_able_to_see_the(String)"
});
formatter.result({
  "duration": 73503400,
  "status": "passed"
});
formatter.after({
  "duration": 7465647700,
  "status": "passed"
});
formatter.before({
  "duration": 13020301400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDefs.user_on_the_homepage()"
});
formatter.result({
  "duration": 9312200,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User should be able to purchase Gas",
  "description": "",
  "id": "as-a-qa,-i-would-like-to-buy-gas;user-should-be-able-to-purchase-gas;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@BuyGas"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User click on Buy energy button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Type \"3001\" and Click on Buy",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be able to see the \"Thank you for your purchase of 3001 units of Gas We have popped it in the post and it will be with you shortly.There are now -1 units of Gas left in our stores.\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_click_on_Buy_energy_button()"
});
formatter.result({
  "duration": 868897600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3001",
      "offset": 6
    }
  ],
  "location": "MyStepDefs.typeAndClickOnBuy(String)"
});
formatter.result({
  "duration": 1073416000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thank you for your purchase of 3001 units of Gas We have popped it in the post and it will be with you shortly.There are now -1 units of Gas left in our stores.",
      "offset": 32
    }
  ],
  "location": "MyStepDefs.user_should_be_able_to_see_the(String)"
});
formatter.result({
  "duration": 69326800,
  "status": "passed"
});
formatter.after({
  "duration": 9419031700,
  "status": "passed"
});
formatter.before({
  "duration": 7937549700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User on the homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDefs.user_on_the_homepage()"
});
formatter.result({
  "duration": 9556800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should be able to purchase Gas",
  "description": "",
  "id": "as-a-qa,-i-would-like-to-buy-gas;user-should-be-able-to-purchase-gas;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@BuyGas"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User click on Buy energy button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Type \"0\" and Click on Buy",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be able to see the \"Thank you for your purchase of 0 units of Gas We have popped it in the post and it will be with you shortly.There are now 3000 units of Gas left in our stores.\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepDefs.user_click_on_Buy_energy_button()"
});
formatter.result({
  "duration": 1345553800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 6
    }
  ],
  "location": "MyStepDefs.typeAndClickOnBuy(String)"
});
formatter.result({
  "duration": 829515500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thank you for your purchase of 0 units of Gas We have popped it in the post and it will be with you shortly.There are now 3000 units of Gas left in our stores.",
      "offset": 32
    }
  ],
  "location": "MyStepDefs.user_should_be_able_to_see_the(String)"
});
formatter.result({
  "duration": 74730200,
  "status": "passed"
});
formatter.after({
  "duration": 4316952600,
  "status": "passed"
});
});