import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { WatchHistory } from "../../../POM/WatchHistory";
const wh= new WatchHistory();

When ('Admin user see movie in the movie list', ()=>{
    wh.watchmoviehistorymanager();
})

Given ('Customer user login', ()=>{
    cy.logincustomer();
})

When ('Customer user buy ticket and see movie in the list', ()=>{
   wh.watchmoviehistorycustomer();
})
