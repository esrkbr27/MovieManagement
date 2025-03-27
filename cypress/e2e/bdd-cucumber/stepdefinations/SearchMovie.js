import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import { SearchMovie } from "../../../POM/Searchmovie";

 const sm= new SearchMovie();

Given('Admin user search film with 3 character', ()=>{
  
    sm.searchmovie();
    
})