const require = require('neat-csv');
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
    cy.get(".order-summary button").click()
    Cypress.config("fileServerFolder")
    cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice.csv").then(async (text)=>{
    const csv=await neatCSV(text)
    console.log(csv)
    const actualProductCSV=csv[0]["Product Name"]
    expect(productName).to.be.equal(actualProductCSV)

    })
  });

  

});