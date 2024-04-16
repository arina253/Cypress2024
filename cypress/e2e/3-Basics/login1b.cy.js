/// <reference types="cypress" />

describe('verify the login', function(){

    it('verify the login with valid credentials', function(){

        //Arrangements
        cy.visit('https://www.saucedemo.com/v1/')

        //Action
        cy.get('#user-name').type("standard_user")
        cy.get('input[name="password]').type('secret_sauce')
        cy.get('.btn_action').click()

        //Assertion
        cy.get('.product').should('be.visible').and('have.attr','class')
    })

    it('verify the login with invalid credentials',function(){
        cy.visit('https://www.saucedemo.com/v1/')
        cy.get('#user-name').type("god")
        cy.get('#password').type('admin123')
        cy.get('#login-button').click()
        cy.get('h3[data-test="error"]').should('be.visible')
    })
})
