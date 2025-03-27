export class  WatchHistory {

    watchmoviehistorymanager(){

        cy.get('.mt-2').click()
        cy.wait(2000)
        cy.get('.mb-1').should('be.visible')
    }
    

    watchmoviehistorycustomer(){
        cy.get(':nth-child(2) > .p-0 > .cursor-pointer').click()
        cy.wait(3000)
        cy.contains('Buy This Session Ticket').click()
        cy.wait(5000)
        cy.get('.mt-2').click()
        cy.get('.pt-0 > .grid > :nth-child(1)').should('be.visible')


    }




}
