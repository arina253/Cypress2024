///<reference types = "cypress" /> 

describe('verify file upload in cypress', function(){

    it('verify single file upload in cypress', function(){
        cy.visit("https://www.webdriveruniversity.com/File-Upload/index.html")

        cy.on('window:alert',function(str){
            expect(str).to.eq('Your file has now been uploaded!')
            return true
        })

        cy.get('input[type="file"]').selectFile('C:\\Users\\joshi\\OneDrive\\Desktop\\Others\\CYPRESS2024\\cypress\\fixtures\\Cypress Questions.docx')
        cy.get('input[type="submit"]').click()
        cy.url().should('contain','Questions')
    })

    it.only('verify the multiple file upload in cypress', function(){
        cy.visit('https://www.zoho.com/au/books/accounting-software-demo/#/salesorders/new')
        let file1 = "C:\\Users\\joshi\\OneDrive\\Desktop\\Others\\CYPRESS2024\\cypress\\fixtures\\SQL CLAS9.docx"
        let file2 = "C:\\Users\\joshi\\OneDrive\\Desktop\\Others\\CYPRESS2024\\cypress\\fixtures\\example.json"
        cy.get('input[type="file"]').first().selectFile([file1,file2])
        cy.get('#ember379').should('contain','2')
    })
})


//POINTS
// For file upload, look for <input> tag and attribute <type = "file" >
// For passing path of file in Windows, add \\
// While passing multiple files, pass it in array.
// selectFile is a inbuilt function