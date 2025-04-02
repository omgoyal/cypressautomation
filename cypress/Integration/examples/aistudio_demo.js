describe("Cypress studio demo",function(){


    it("create new transaction",function(){
        /* ==== Generated with Cypress Studio ==== */

        //below code belong to login page
        cy.visit('https://rahulshettyacademy.com/client');
        cy.get('#userEmail').clear('r');
        cy.get('#userEmail').type('rahulshetty@gmail.com');
        cy.get('#userPassword').clear('I');
        cy.get('#userPassword').type('Iamking@000');
        cy.get('#login').click();

        //below code belong to shopping page
        cy.get(':nth-child(1) > .card > .card-body > .w-10').click();
        cy.get('.btn > label').click();
        cy.get('.subtotal > ul > :nth-child(3) > .btn').click();
        cy.get(':nth-child(2) > .btn').should('have.text', 'Apply Coupon');
        cy.get('.form-group > .input').clear('I');
        cy.get('.form-group > .input').type('India');
        cy.get(':nth-child(3) > .ng-star-inserted').click();
        cy.get('.btnn').click();
        cy.get('.hero-primary').click();
        //  below code belong to order confirmation page
        cy.get('.hero-primary').should('have.text', ' Thankyou for the order. ');
        cy.get(':nth-child(2) > .em-spacer-1 > label').click();
        cy.get(':nth-child(1) > :nth-child(6) > .btn').click();
        /* ==== End Cypress Studio ==== */
    });
});