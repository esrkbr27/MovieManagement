import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import {Login} from '../../../POM/login'

const login= new Login();

Given('I navigate to automation exercise website', () => {
  login.visit();

})

When('I enter login credentials', () => {
login.fillForm();

})
Then('I should be logged in', () => {
cy.contains('Your email').should('be.visible');

})