//cypress-spec

/// <reference types="cypress"/>

describe('Handling mouse hover', () => {
  it('handling mouse hover test case', () => {
  cy.visit("https://rahulshettyacademy.com/AutomationPractice/#//");


 //to validate mouse hover
  cy.get('div.mouse-hover-content').invoke('show')
 //to forcible click
  cy.contains('Top').click({force:true})
  cy.url().should('include','top')


     

})

})
