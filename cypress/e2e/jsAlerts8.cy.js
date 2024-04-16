// We cannot inspect JS alert.
//window.alert()
//window.confirm()
//window.prompt()

/// <reference types="cypress" />

describe('manage js alert', function(){
    this.beforeEach(function(){
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    })

    it('window:alert', function(){
        cy.on('window:alert',function(text){
            expect(text).to.eq('I am a JS Alert')
            return true
        })
        cy.contains('Click for JS Alert').click()
        cy.get('#result').should('have.text','You successfully clicked an alert')

    })

    it('window:confirm - ok click', function(){
        cy.on('window:confirm',function(text){
            expect(text).to.eq('I am a JS Confirm')
            return true
        })
        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('have.text','You clicked: Ok')

    })

    it.only('window:confirm - ok Cancel', function(){
        cy.on('window:confirm',function(text){
            expect(text).to.eq('I am a JS Confirm')
            return false
        })
        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('have.text','You clicked: Cancel')

    })

    it('window:prompt',function(){
        cy.window().then(function(win){
            cy.stub(win,'prompt').returns('hello I am QA engineer')
            cy.contains('Click for JS Prompt').click()
            cy.get('#result').should('contain','hello I am QA engineer')

        })

    })
})

