//cypress-spec

/// <reference types="cypress"/>

describe('Handling Child Windows', () => {
  it('Should handle child window', () => {
    


  cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

     cy.get('.cart a[href="https://rahulshettyacademy.com/dropdownsPractise/"]').invoke('removeAttr','target').click();
     cy.on('uncaught:exception', (err, runnable) => {
      cy.get('#buttons a[title="Flights"] span.text-label').should('contain','Flights');
      return false;
    });

     })
    }
)
