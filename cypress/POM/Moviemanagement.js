export class MovieManagement {

 

    addMovie (){

     cy.get('.flex-col > [href="/manager/movies"]').click();
     cy.get('.self-end > .bg-primary').click();
     cy.wait(3000)
     cy.get("[placeholder='Enter movie name']") .type('New Movie');
     cy.wait(2000)
     cy.get("[name='ageRestriction']").type('8')
     cy.wait(2000)
     cy.get("[placeholder='Room number']").type('102')
     cy.wait(2000)
     cy.get("button[type='submit']").click()

    }

    updateMovie(){
        cy.get('.flex-col > [href="/manager/movies"]').click();
        cy.contains('Edit').click()
        cy.wait(2000)
        cy.get("[name='name']").clear().type('Aslan edit 1')
        cy.wait(2000)
        cy.get('.bg-primary').click();
        cy.wait(2000)
      
    }

    deleteMovie(){
        
        cy.get('.flex-col > [href="/manager/movies"]').click();
        cy.contains('Delete').click()
        cy.contains('Delete Movie').click()
        cy.contains('Movie deleted successfully'); // Adjust based on the actual success message

    }

}