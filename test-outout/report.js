$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("creditCardPayment.feature");
formatter.feature({
  "line": 1,
  "name": "Buy pillows from demo.midtrans.com",
  "description": "",
  "id": "buy-pillows-from-demo.midtrans.com",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Buy Pillow using credit card",
  "description": "",
  "id": "buy-pillows-from-demo.midtrans.com;buy-pillow-using-credit-card",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is in home page and title of the page is \"\u003ctitle\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "click on BUY NOW button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on CHECKOUT button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on CONTINUE button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "verify credit card option is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on credit card",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "enter card number \"\u003ccardNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "enter date \"\u003cdate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "enter CVV \"\u003cCVV\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click PAY NOW button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "verify payment page appears",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "enter password \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "click OK button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "verify message \"\u003cmessage\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "buy-pillows-from-demo.midtrans.com;buy-pillow-using-credit-card;",
  "rows": [
    {
      "cells": [
        "title",
        "cardNumber",
        "date",
        "CVV",
        "password",
        "message"
      ],
      "line": 22,
      "id": "buy-pillows-from-demo.midtrans.com;buy-pillow-using-credit-card;;1"
    },
    {
      "cells": [
        "Sample Store",
        "4811 1111 1111 1114",
        "03/20",
        "123",
        "112233",
        "Transaction successful"
      ],
      "line": 23,
      "id": "buy-pillows-from-demo.midtrans.com;buy-pillow-using-credit-card;;2"
    },
    {
      "cells": [
        "Sample Store",
        "4911 1111 1111 1113",
        "03/20",
        "123",
        "112233",
        "Your card got declined by the bank"
      ],
      "line": 24,
      "id": "buy-pillows-from-demo.midtrans.com;buy-pillow-using-credit-card;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Buy Pillow using credit card",
  "description": "",
  "id": "buy-pillows-from-demo.midtrans.com;buy-pillow-using-credit-card;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is in home page and title of the page is \"Sample Store\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "click on BUY NOW button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on CHECKOUT button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on CONTINUE button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "verify credit card option is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on credit card",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "enter card number \"4811 1111 1111 1114\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "enter date \"03/20\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "enter CVV \"123\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click PAY NOW button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "verify payment page appears",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "enter password \"112233\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "click OK button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "verify message \"Transaction successful\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Sample Store",
      "offset": 47
    }
  ],
  "location": "CreditCardPayment_StpDef.user_is_in_home_page_and_title_of_the_page_is(String)"
});
formatter.result({
  "duration": 11540902200,
  "status": "passed"
});
formatter.match({
  "location": "CreditCardPayment_StpDef.click_on_BUY_NOW_button()"
});
formatter.result({
  "duration": 118505600,
  "status": "passed"
});
formatter.match({
  "location": "CreditCardPayment_StpDef.click_on_CHECKOUT_button()"
});
formatter.result({
  "duration": 372125000,
  "status": "passed"
});
formatter.match({
  "location": "CreditCardPayment_StpDef.click_on_CONTINUE_button()"
});
formatter.result({
  "duration": 1429551800,
  "status": "passed"
});
formatter.match({
  "location": "CreditCardPayment_StpDef.verify_credit_card_option_is_visible()"
});
formatter.result({
  "duration": 2624255300,
  "status": "passed"
});
formatter.match({
  "location": "CreditCardPayment_StpDef.click_on_credit_card()"
});
formatter.result({
  "duration": 123559400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4811 1111 1111 1114",
      "offset": 19
    }
  ],
  "location": "CreditCardPayment_StpDef.enter_card_number(String)"
});
formatter.result({
  "duration": 260230000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "03/20",
      "offset": 12
    }
  ],
  "location": "CreditCardPayment_StpDef.enter_date(String)"
});
formatter.result({
  "duration": 75711600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 11
    }
  ],
  "location": "CreditCardPayment_StpDef.enter_CVV(String)"
});
formatter.result({
  "duration": 60168100,
  "status": "passed"
});
formatter.match({
  "location": "CreditCardPayment_StpDef.click_PAY_NOW_button()"
});
formatter.result({
  "duration": 116842300,
  "status": "passed"
});
formatter.match({
  "location": "CreditCardPayment_StpDef.verify_payment_page_appears()"
});
formatter.result({
  "duration": 6333529100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "112233",
      "offset": 16
    }
  ],
  "location": "CreditCardPayment_StpDef.enter_password(String)"
});
formatter.result({
  "duration": 130453400,
  "status": "passed"
});
formatter.match({
  "location": "CreditCardPayment_StpDef.click_OK_button()"
});
formatter.result({
  "duration": 705215500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Transaction successful",
      "offset": 16
    }
  ],
  "location": "CreditCardPayment_StpDef.verify_message(String)"
});
formatter.result({
  "duration": 3180108000,
  "status": "passed"
});
formatter.match({
  "location": "CreditCardPayment_StpDef.close_browser()"
});
formatter.result({
  "duration": 784705400,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Buy Pillow using credit card",
  "description": "",
  "id": "buy-pillows-from-demo.midtrans.com;buy-pillow-using-credit-card;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is in home page and title of the page is \"Sample Store\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "click on BUY NOW button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click on CHECKOUT button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "click on CONTINUE button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "verify credit card option is visible",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on credit card",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "enter card number \"4911 1111 1111 1113\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "enter date \"03/20\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "enter CVV \"123\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "click PAY NOW button",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "verify payment page appears",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "enter password \"112233\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "click OK button",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "verify message \"Your card got declined by the bank\"",
  "matchedColumns": [
    5
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Sample Store",
      "offset": 47
    }
  ],
  "location": "CreditCardPayment_StpDef.user_is_in_home_page_and_title_of_the_page_is(String)"
});
formatter.result({
  "duration": 10318915200,
  "status": "passed"
});
formatter.match({
  "location": "CreditCardPayment_StpDef.click_on_BUY_NOW_button()"
});
formatter.result({
  "duration": 75377300,
  "status": "passed"
});
formatter.match({
  "location": "CreditCardPayment_StpDef.click_on_CHECKOUT_button()"
});
formatter.result({
  "duration": 660689800,
  "status": "passed"
});
formatter.match({
  "location": "CreditCardPayment_StpDef.click_on_CONTINUE_button()"
});
formatter.result({
  "duration": 1406593000,
  "status": "passed"
});
formatter.match({
  "location": "CreditCardPayment_StpDef.verify_credit_card_option_is_visible()"
});
formatter.result({
  "duration": 2644873200,
  "status": "passed"
});
formatter.match({
  "location": "CreditCardPayment_StpDef.click_on_credit_card()"
});
formatter.result({
  "duration": 222259100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4911 1111 1111 1113",
      "offset": 19
    }
  ],
  "location": "CreditCardPayment_StpDef.enter_card_number(String)"
});
formatter.result({
  "duration": 234745500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "03/20",
      "offset": 12
    }
  ],
  "location": "CreditCardPayment_StpDef.enter_date(String)"
});
formatter.result({
  "duration": 72030900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 11
    }
  ],
  "location": "CreditCardPayment_StpDef.enter_CVV(String)"
});
formatter.result({
  "duration": 173791100,
  "status": "passed"
});
formatter.match({
  "location": "CreditCardPayment_StpDef.click_PAY_NOW_button()"
});
formatter.result({
  "duration": 204894300,
  "status": "passed"
});
formatter.match({
  "location": "CreditCardPayment_StpDef.verify_payment_page_appears()"
});
formatter.result({
  "duration": 5657655300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "112233",
      "offset": 16
    }
  ],
  "location": "CreditCardPayment_StpDef.enter_password(String)"
});
formatter.result({
  "duration": 120882900,
  "status": "passed"
});
formatter.match({
  "location": "CreditCardPayment_StpDef.click_OK_button()"
});
formatter.result({
  "duration": 729891000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your card got declined by the bank",
      "offset": 16
    }
  ],
  "location": "CreditCardPayment_StpDef.verify_message(String)"
});
formatter.result({
  "duration": 23653551100,
  "status": "passed"
});
formatter.match({
  "location": "CreditCardPayment_StpDef.close_browser()"
});
formatter.result({
  "duration": 740650300,
  "status": "passed"
});
});