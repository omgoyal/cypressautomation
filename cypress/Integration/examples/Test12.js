/// <reference types="cypress" />

describe('Handling Calendar dynamic', () => {
  it('handling calendar dynamic test case', () => {
    const monthnumber = "6";
    const date = "15";
    const year = "2027";
    const expectedlist = [monthnumber, date, year];

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");

    // Click to open the calendar
    cy.get('.react-date-picker__inputGroup').click();

    // Optionally, ensure the calendar is loaded before interaction
    cy.get('.react-calendar__navigation__label').should('be.visible');

    // Navigate through the calendar (check navigation needs)
    cy.get(".react-calendar__navigation__label").click();
    cy.get(".react-calendar__navigation__label").click();
    cy.contains("button", year).click();

    // Select the month
    cy.get(".react-calendar__tile.react-calendar__year-view__months__month")
      .eq(Number(monthnumber) - 1)
      .click();

    // Select the day
    cy.contains("abbr", date).click();

    // Assertion
    cy.get(".react-date-picker__inputGroup__input").each(($e1, index) => {
      cy.wrap($e1).invoke('val').should('eq', expectedlist[index]);
    });
  });
});
