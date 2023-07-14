import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';

Given('Kullanici siteye gider', () =>{
 
    cy.visit('https://digiturksite.kartega.com/')
    cy.get(':nth-child(8) > .btn').click()

})

When('Go to the page with data', (table) =>{

  table.hashes().forEach(row => {
    cy.get('#UserName').type(row.username)
    cy.get('#Password').type(row.password) 
  });  

  cy.get('.login-right-button').click()

})


