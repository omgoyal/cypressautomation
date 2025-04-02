//cypress-spec

/// <reference types="cypress"/>

describe('Handling web table', () => {
  it('handling web table test case', () => {
  cy.visit("https://rahulshettyacademy.com/AutomationPractice/#//");

  cy.get("table#product[name='courses'] tr td:nth-child(2)").each(($e1,index,$list)=>{

    const text= $e1.text()
    if(text.includes("Python")){

      cy.get("table#product[name='courses'] tr td:nth-child(2)").eq(index).next().then(function(price){
        const pricetext=price.text()
        expect(pricetext).to.equal('25')

      })
    }

  }

  )

     

})
    }
)
