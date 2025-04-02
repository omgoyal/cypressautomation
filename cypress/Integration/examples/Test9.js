//cypress-spec

/// <reference types="cypress"/>

describe('Handling child window', () => {
  it('handling child window test case', () => {
  cy.visit("https://rahulshettyacademy.com/AutomationPractice/#//");

  cy.get('#opentab').then(function(e1){

    const url=e1.prop('href')
    cy.visit(url)
    cy.origin(url,()=>{
      cy.get("div#navbarSupportedContent a[href*='about']").click()

    })
    

   
  })


     

})

})
