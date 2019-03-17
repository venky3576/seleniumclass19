$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Login.feature");
formatter.feature({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "User in login page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User click Signin button",
  "keyword": "Then "
});
formatter.step({
  "name": "Verify user login successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "techfiosdemo@gmail.com",
        "abc123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "User in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"techfiosdemo@gmail.com\" and \"abc123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_enter_user_name_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click Signin button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_click_Signin_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify user login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.verify_user_login_successfully()"
});
formatter.result({
  "status": "passed"
});
});