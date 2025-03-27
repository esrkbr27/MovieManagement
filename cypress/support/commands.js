// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginmanager',()=>{
    cy.visit('https://qa-assignment-fe-fb175f1879ab.herokuapp.com');
    cy.get('#email').type('manager@test.com')
    cy.wait(1000)
    cy.get('#password') .type('example-password') 
    cy.wait(1000) 
    cy.get('.inline-flex').click()
    cy.wait(2000)
}); 

Cypress.Commands.add('logincustomer',()=>{

    cy.visit('https://qa-assignment-fe-fb175f1879ab.herokuapp.com');
    cy.get('#email').type('user@user.com')
    cy.wait(1000)
    cy.get('#password') .type('user1234') 
    cy.wait(1000) 
    cy.get('.inline-flex').click()
    cy.wait(2000)


})

    



