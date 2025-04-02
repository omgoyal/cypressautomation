//cypress-spec

/// <reference types="cypress"/>

describe('My third test suite', function()
{

    it('my third test case', function(){

       cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')

       //checkbox explaining
       cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
       cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
       cy.get('input[type="checkbox"]').check()

       //cy.get('input[type="checkbox"]').check(['option2','option3'])

       //static drop-down explaning

       cy.get('select#dropdown-class-example').select('Option3').should('have.value','option3')

       //dynamic drop-down explaining

       cy.get('input#autocomplete').type('ind')
       cy.get('.ui-menu-item div').each(($e1,index,$list)=>{
           const textcountry =$e1.text();

           if(textcountry==="India"){
            cy.wrap($e1).click()
           }
       }
       );
       cy.get('input#autocomplete').should('have.value','India')


       //hide show elements -visibility invisibility elements

       cy.get('input#displayed-text').should('be.visible')
       cy.get('input#hide-textbox').click()
       cy.get('input#displayed-text').should('not.be.visible') 
       cy.get('input#show-textbox').click()
       cy.get('input#displayed-text').should('be.visible')

       //radio button examples
       cy.get('input[value="radio1"]').check().should('be.checked')

    }

    );

  

}
)