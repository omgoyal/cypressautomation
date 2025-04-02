const require = require('neat-csv');
'use strict';

/**
 * Test suite for JWT session functionality.
 */
describe('JWT Session', () => {
  
  /**
   * Test case to verify if the JWT session is created successfully.
   */
  it('is login through local storage', async () => {

    let productName;
    cy.LoginAPI().then(()=>{
        cy.visit(' https://rahulshettyacademy.com/client/',{
            onBeforeLoad:function(window){
                window.localStorage.setItem('token',Cypress.env('token'))
            }
        })

    })
    cy.get(".card-body b").eq(1).then(function(element){
        productName= element.text();
    })
    cy.get(".card-body button:last-of-type").eq(1).click()

    cy.get("[routerlink*='car']").click()
    cy.contains("Checkout").click()
    cy.get("[placeholder*='Country']").type("Ind")
    cy.get(".ta-results button").each(($e1,index,$list)=>{

        if($e1.text().includes("India")){
          cy.wrap($e1).click()
        }
    })

    cy.get(".action-submit").click()
    cy.wait(5000)
    cy.get(".order-summary button").contains("Excel").click()

    
const filePath=Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_om.xlsx"
 cy.task('excelToJsonConvertor',filePath).then(function(result){
  cy.log(result)
  expect(productName).to.equal(result.data[1].B);

console.log(result)
   
  });

  cy.readFile(filePath).then(function(text){
    expect(text).to.include(productName)
  })

})

});