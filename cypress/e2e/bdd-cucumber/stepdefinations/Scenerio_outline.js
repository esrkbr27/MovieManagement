import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';

Given('visit url', () =>{
    cy.visit('https://www.google.com');
})

When('search capital of {string}', (capitals) =>{
    cy.get('#APjFqb').type(capitals)
    cy.get('.FPdoLc > center > .gNO89b').click()

})

Then('assert search results capitals {string}', (capitals) =>{
    cy.title().should('include', capitals)
})