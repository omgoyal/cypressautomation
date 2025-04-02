//cypress-spec

/// <reference types="cypress"/>

describe('Handling Calendar', () => {
  it('handling calendar test case', () => {
  cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
  cy.get("a[href*='#/offers']").then(function(e1){
    const url=e1.prop('href')
    cy.visit(url)
    cy.url().should('include','offers')
    cy.get('button.react-date-picker__calendar-button svg').click()
    cy.get('div.react-date-picker__calendar div.react-calendar__navigation button.react-calendar__navigation__next-button').click()
    cy.get("div.react-calendar__viewContainer button abbr[aria-label*='24']").eq(1).click()
    cy.get("div.react-date-picker__inputGroup input").eq(0).then(function(e1){
      const delieverydate=e1.prop('value')
      expect(delieverydate).to.equal('2025-03-24')
    })

  })
  
 







     

})

})
