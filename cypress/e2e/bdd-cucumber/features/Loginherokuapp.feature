Feature:User Authorization

Scenario:Manager user login

Given User goes the login page
When Enter credentials

|username|password |
|manager@test.com|example-password|


Scenario:Customer user login

Given User goes the login page
When Enter credentials

|username|password |
|user@user.com|user1234|