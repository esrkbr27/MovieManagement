import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";




Given ('Admin goes the movie list webpage and see Movie List', ()=>{
   cy.loginmanager()
   cy.get('.flex-col > [href="/manager/movies"]').click();
   cy.wait(2000);
})


When  ('Admin can select and unselect the checkboxes in the movie list', ()=>{
    cy.get('[data-slot="checkbox"]').first().click();
    cy.wait(2000)
    cy.get('[data-slot="checkbox"]').click( {multiple: true} );
  
    
})
When   ('Admin see Refresh button', ()=>{
    cy.get('.flex-wrap > :nth-child(3)').should('be.visible')
})

Given ('User goes the movie list webpage and see Movie List', ()=>{
    cy.logincustomer();
    cy.get('div:nth-child(7)').should('be.visible')
})

When ('User see Buy Ticket button', ()=>{
    cy.get(':nth-child(1) > .p-0 > .cursor-pointer').should('be.visible')
})