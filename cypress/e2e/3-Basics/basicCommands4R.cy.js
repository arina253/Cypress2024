/// <reference types="cypress" />

describe('learn basic commands', function(){

    it('how to get title', function(){
        cy.visit('https://www.google.com')
        cy.title().should('contain','Google')
    })

    it('how to get current url in cypress', function(){
        cy.visit ('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.url().should('contain','contactus')
    }) 

    it('how to get elements in cypress', function(){
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')

        // How to get one element
        cy.get("h2[name = 'contactme").should('have.attr','class','section_header')
        cy.contains('CONTACT US').should('have.attr','name','contactme')

        // How to get multiple elements
        cy.get('input[name]').should('have.length',3)

        //How to get elements inside a node
        // default cypress way to get the element - css selector
      
    })


    //Defect - 1234455 , US - US1234566
    it.skip('how to get elements in cypress', function(){
        cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('label').contains('Option 1').should('be.visible')
    })

    it('how to get elements in cypress', function(){
        cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.wait(2000)
        cy.log('2 second wait over')
        cy.get('label').contains('Option 1').should('be.visible')
        cy.log('assertion done')
        cy.reload()
        cy.log('reload done')
    })

    
})