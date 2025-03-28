export class SearchMovie{

searchmovietrue(){

    cy.get('.flex-col > [href="/manager/movies"]').click();
    cy.wait(2000)
    cy.get('.relative > .border-input').click().type('Hür') 
    cy.wait(3000)
    cy.get('.space-y-4 > .justify-between').should('be.visible')
    //cy.get('.flex-wrap > :nth-child(2)').click()
}



searchmoviefalse(){

    cy.get('.flex-col > [href="/manager/movies"]').click();
    cy.wait(2000)
    cy.get('.relative > .border-input').click().type('Hü') 
    cy.get('.space-y-4 > .justify-between').should('not.be.visible')

}

filter(){
 
    cy.get('.flex-col > [href="/manager/movies"]').click();
    cy.wait(2000)
    cy.get('.flex-wrap > :nth-child(2)').click()
    cy.get('#ageRestrictionFilter').click().type('10')
    cy.get('#sortByFilter').click()
    cy.contains('Created At').click()
   
}


}