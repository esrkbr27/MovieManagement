export class Loginherokuapp {

    visit () {
        cy.visit('https://qa-assignment-fe-fb175f1879ab.herokuapp.com');
    }

    entercredentials (table){

        table.hashes().forEach(row => {
            cy.get('#email').type(row.username)
            cy.wait(2000)
            cy.get('#password') .type(row.password) 
            cy.wait(2000) }); 
            cy.get('.inline-flex').click()
            cy.wait(5000)
            //success login pop up aseert
            cy.get('[data-title=""]').should('be.visible')
        

    }

    


}