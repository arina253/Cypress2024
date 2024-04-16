///<reference types="cypress"/>

describe('manage date picker in cypress using js', function () {

    it('date picker in js', function () {
        cy.visit('https://www.webdriveruniversity.com/Datepicker/index.html')

        let date = new Date()
        date.setDate(date.getDate() + 400)
        cy.log(date.getFullYear())
        cy.log(date.getMonth())
        cy.log(date.getDate())

        //Wednesday, May 21, 2025

        cy.log(date.toLocaleString("default", { month: "long" }))
        let year = date.getFullYear()
        let month = date.toLocaleString("default", { month: "long" })
        let dayDate = date.getDate()

        cy.get('#datepicker').click()

        function selectMonthYear() {
            //year selection
            cy.get('.datepicker-switch').first().then(function (currentDate) {
                cy.log(currentDate.text())
                if (!currentDate.text().includes(year)) {
                    cy.get('.next').first().click()
                    selectMonthYear()
                }
            })
            .then(function(){
                //month selection
                cy.get('.datepicker-switch').first().then(function(currentDate){
                    cy.log(currentDate.text())
                    if(!currentDate.text().includes(month)){
                        cy.get('.next').first().click()
                        selectMonthYear();
                    }
                })
            })

        }
        function selectFutureDate(){
            cy.contains(dayDate).click()
        }

        selectMonthYear()
        selectFutureDate()
    })
})
    
