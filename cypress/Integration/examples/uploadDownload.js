describe('File Upload and Download Tests', () => {

    it('Verify upload download excel file', () => {

        const filePath = Cypress.config("fileServerFolder")+"/cypress/downloads/download.xlsx";
        cy.visit("https://rahulshettyacademy.com/upload-download-test/index.html");
        cy.get("#downloadButton").click();


     cy.task('excelTest',{searchText:"Banana",replacetext:"Redmi",filepath:filePath}).
     then((result)=>{
        expect(result).to.equal('Success');
    });

})
   
});