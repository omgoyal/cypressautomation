import ProductPage from "../../support/pageObjects/ProductPage.js"
class HomePage {

    goTo(url){
        
        cy.visit(Cypress.env('url')+"/loginpagePractise/#/");
    }

    login(username, password){
        cy.get('input#username').type(username)
  cy.get('input#password').type(password)
  cy.contains("Sign In").click()
  return new ProductPage();
    }
}
export default HomePage;

