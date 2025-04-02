
class ConfirmationPage{

    submitFormDetails(){

        cy.submitFormDetails()

       // cy.get('#country').type('India')
       // Cypress.config('defaultCommandTimeout',10000)
        //cy.get('.suggestions ul li a').click()
       // cy.get('.btn-success').click()
    }

    getAlertMessage(){
      return  cy.get('.alert-success')
    }
}

export default ConfirmationPage;