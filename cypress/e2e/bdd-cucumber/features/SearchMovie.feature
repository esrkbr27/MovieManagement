Feature: Search movie

Background: Admin user login
Given Admin user login

Scenario: Search 3 character (Positive Scenario)
Given Admin user search film with 3 character and assert result is true 

Scenario: Search less than 3 character (Negative Scenario)
Given Admin user search film with less than 3 character and assert result is false

@filter
Scenario: Filtering Function
Given Admin user filter by age 