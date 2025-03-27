export class Login {

    visit () {
        cy.visit('https://www.automationexercise.com/');

    }

    fillForm (){

        cy.get('a[href="/login"]').click();
        cy.contains('Login to your account').should('be.visible');
        cy.get('input[data-qa="login-email"]').type('example1@test.com');
        cy.get('input[data-qa="login-password"]').type('foobar');
        cy.get('button[data-qa="login-button"]').click();


    }
}