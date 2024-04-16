/// <reference types="cypress" />

describe('verify the login',function(){
    
    beforeEach(function(){
        cy.visit('https://www.saucedemo.com/v1/')
        cy.get ('#user-name').type("standard_user")
        cy.get('#password').type ('secret_sauce')
        cy.get('#login-button').click()

    })

    it('verify the login with login credentials', function(){
        cy.get('.product_label').should('be.visible').and('have.attr','class')
    })

    it('verify the login with invalid credentials', function(){
        cy.get('h3[data-test = "error"]').should('be.visible')
    })
})