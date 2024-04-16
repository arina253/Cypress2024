/// <reference types="cypress" />

describe('verify the contact us form', function () {

    this.beforeEach(function () {
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html")
    })


    it('verify the form with valid data', function () {
        cy.get('input[name=first_name').type("ari")
        cy.get('input[name="last_name"]').type("jos")
        cy.get('input[name="email"]').type("a@gmail.com")
        cy.get('textarea[name="message"]').type("learning")
        cy.get('input[type="submit"]').click()

        cy.get('h1').should('be.visible').and('have.text', 'Thank You for your Message!')



    })

    it('verify the form with invalid data', function () {

        cy.get('input[name=first_name').type("ari")
        cy.get('input[name="last_name"]').type("jos")
        cy.get('input[name="email"]').type("agmail.com")
        cy.get('textarea[name="message"]').type("learning")
        cy.get('input[type="submit"]').click()

        cy.get('body').should('contain', 'Invalid')


    })

    it('verify the form reset button', function () {
        cy.get('input[name=first_name').type("ari")
        cy.get('input[name="last_name"]').type("jos")
        cy.get('input[name="email"]').type("a@gmail.com")
        cy.get('textarea[name="message"]').type("learning")
        cy.get('input[type="reset"]').click()

        cy.get('input[name=first_name').should("have.text", "")
        cy.get('input[name="last_name"]').should("have.text", "")
        cy.get('input[name="email"]').should("have.text", "")
        cy.get('textarea[name="message"]').should("have.text", "")



    })
})