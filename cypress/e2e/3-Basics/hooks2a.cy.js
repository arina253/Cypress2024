/// <reference types="cypress" />

before(function(){
    cy.log("First------A")
})

beforeEach(function(){
    cy.log("I will run before every testcase")
})

it('test case one',function(){
    cy.log("test case one executed")
})

it('test case two',function(){
    cy.log("Test case two executed")
})

afterEach(function(){
    cy.log("I will run after every test case")
})

after(function(){
    cy.log("Last--------Z")
})