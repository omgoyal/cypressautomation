
import CartPage from  "../../support/pageObjects/CartPage.js"
class ProductPage{

pageValidation(){
    cy.contains("Shop Name").should('be.visible')
}

getCardCount(){
    return cy.get('app-card-list app-card')
}

selectFirstProduct(){
    cy.get('app-card-list app-card').eq(0).contains('button','Add').click()
}

goToCart(){
    cy.contains('a','Checkout').click()
    return new CartPage();
}


selectProduct(productName){
    cy.get('app-card-list app-card').filter(`:contains("${productName}")`).then($element=>{

        cy.wrap($element).should('have.length',1)
        cy.wrap($element).contains('button','Add').click()
      })
}

}
export default ProductPage;