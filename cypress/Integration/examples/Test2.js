//cypress-spec

/// <reference types="cypress"/>

describe('My second test suite', function()
{

    it('my second test case', function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4)

        //parent child chaning
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length',4)
        //console.log('sf1')
        /*cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click().then(function(){
            console.log('sf')
        })*/

        cy.get('@productLocator').find('.product').each(($e1, index, $list)=>{
        const textVeg=$e1.find('h4.product-name').text();

        if(textVeg.includes('Cashews')){
            cy.wrap($e1).find('button').click()
        }

        });
        //assert if logo text is correctly displayed
        cy.get('.brand').should('have.text','GREENKART')
        
        //this is to print in logs
        const logo=cy.get('.brand').then(function(logoelement){
           cy.log(logoelement.text())
        })

        //logo.text()
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
    }

    );

  

}
)