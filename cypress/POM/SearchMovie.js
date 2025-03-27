export class SearchMovie{

searchmovie(){

    cy.get('.flex-col > [href="/manager/movies"]').click();
    cy.wait(2000)
    cy.get('.relative > .border-input').click().type('Hür') 
    cy.get('.hover\:bg-muted\/50 > :nth-child(2) > .flex').should('include', 'Hür')
    
}








}