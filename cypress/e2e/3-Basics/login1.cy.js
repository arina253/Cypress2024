/// <reference types="cypress" />

//Test scenario 1
describe ('validate the login functionality', function(){

    //test case 1
    it ('login with valid credentials',function(){

        //Arrangement
        cy.visit ('https://www.saucedemo.com/v1/')

        //Actions
        cy.get('#user-name').type ('standard_user')
        cy.get('#password').type ('secret_sauce')
        cy.get('#login-button').click()

        //Assertion
        cy.get('.app_logo').should('be.visible')
        
     })

})