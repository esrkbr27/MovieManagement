import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import { Loginherokuapp } from '../../../POM/Loginherokuapp';

const login= new Loginherokuapp();

Given('User goes the login page', () =>{

   login.visit();
   
})

When('Enter credentials', (table) =>{
  
   login.entercredentials(table);

})






