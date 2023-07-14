Feature: Scenario Outline

Scenario Outline: Capital Search

Given visit url
When search capital of "<world capitals>"
Then assert search results capitals "<world capitals>"

Examples:
|world capitals|
|london|
|paris|
|rome|
|madrid|