import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
const username='admin@admin.com'
const password='admin1234'

Given('User navigate to digiturk website', () =>{
    cy.visit('https://digiturksite.kartega.com/');
})

When('User enter login credentials', () =>{
    cy.get(':nth-child(8) > .btn').click()
    cy.get('#UserName').type(username)
    cy.get('#Password').type(password)
    cy.get('.login-right-button').click()
}
)

Then('User assert login page', () =>{

    cy.get(':nth-child(8) > .dropdownHeader > .dropdownHeader-button')
    .should('be.visible')

})