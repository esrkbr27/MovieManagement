Feature: Login

Scenario: Login user with correct email and password
Given User navigate to digiturk website
When User enter login credentials
Then User assert login page