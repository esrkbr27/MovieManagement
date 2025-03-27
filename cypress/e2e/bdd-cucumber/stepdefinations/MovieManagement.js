import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { MovieManagement } from "../../../POM/Moviemanagement";
const movie = new MovieManagement();

Given ('Admin user login', ()=>{
   cy.loginmanager();
})

Given ('Admin user add a new movie', ()=>{
   movie.addMovie()
})
When  ('Admin user edit movie', ()=>{
    movie.updateMovie ();
})
When  ('Admin user delete a movie', ()=>{
    movie.deleteMovie();
})