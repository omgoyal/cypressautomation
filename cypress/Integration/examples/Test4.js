//cypress-spec

/// <reference types="cypress"/>

describe('My fourth test suite', function()
{

    it('my fourth test case', function(){

       cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')

      cy.get('#alertbtn').click()
      cy.get('input[id="confirmbtn"]').click()

      //window:alert 
      cy.on('window:alert',(str)=>{
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
      })
       
      cy.on('window:confirm',(str)=>{
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
      })


    }

    );

  

}
)