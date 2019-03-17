Feature: Login Functionality

@Login
Scenario Outline: Verify Login

Given User in login page
Then User enter "<username>" and "<password>"
Then User click Signin button
Then Verify user login successfully

Examples:
|username|password|
|techfiosdemo@gmail.com|abc123|