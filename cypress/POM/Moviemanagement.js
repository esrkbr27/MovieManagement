export class MovieManagement {

 

    addMovie (){

     cy.get('.flex-col > [href="/manager/movies"]').click();
     cy.get('.self-end > .bg-primary').click();
     cy.wait(3000)
     cy.get("[placeholder='Enter movie name']") .type('Movie.');
     cy.get("[name='ageRestriction']").type('8')
    // cy.get("[data-slot='popover-trigger']").click()
  
     cy.get("[placeholder='Room number']").type('102')
     cy.get("button[type='submit']").click()
     //cy.contains('Movie created successfully'); // Adjust based on the actual success message
    }

    updateMovie(){
        cy.get('.flex-col > [href="/manager/movies"]').click();
        cy.contains('Edit').click()
        cy.get("[name='name']").clear().type('Aslan edit 1')
        cy.get('.bg-primary').click();
      
    }

    deleteMovie(){
        
        cy.get('.flex-col > [href="/manager/movies"]').click();
        cy.contains('Delete').click()
         cy.contains('Delete Movie').click()
     //   cy.contains('Movie deleted successfully'); // Adjust based on the actual success message

    }

}