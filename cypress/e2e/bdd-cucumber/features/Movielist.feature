Feature: Movie listing page by role

Scenario: Manager user view movie list

Given Admin goes the movie list webpage and see Movie List
When  Admin can select and unselect the checkboxes in the movie list
When  Admin see Refresh button


Scenario: Customer user view movie list
Given User goes the movie list webpage and see Movie List
When   User see Buy Ticket button
