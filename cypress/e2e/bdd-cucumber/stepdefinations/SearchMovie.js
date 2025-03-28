import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import { SearchMovie } from "../../../POM/Searchmovie";

 const sm= new SearchMovie();

Given('Admin user search film with 3 character and assert result is true', ()=>{
  
    sm.searchmovietrue();
    
})

Given ('Admin user search film with less than 3 character and assert result is false', ()=>{

   sm.searchmoviefalse();

})

Given ('Admin user filter by age', ()=>{
    
    sm.filter();

}) 