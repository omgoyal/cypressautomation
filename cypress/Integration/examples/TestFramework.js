import HomePage from "../../support/pageObjects/HomePage.js"



describe('End to end ecommerce test',function(){

  before(function()
  {
    //run once before all tests in this block
    cy.fixture('example').then(function(data){

      this.data=data
      this.homepage= new HomePage();
    })
  }
)

 it('submit order test case',function(){

 
   
    const productName=this.data.productname
    

 

  this.homepage.goTo(this.data.url);
  const productpage=this.homepage.login(this.data.username,this.data.password);

 productpage.pageValidation();
 productpage.getCardCount().should('have.length',4);;
 productpage.selectProduct(productName);
 productpage.selectFirstProduct();
 const cartpage=productpage.goToCart();
cartpage.sumOfProducts().then(function(sum){
  expect(sum).to.be.lessThan(200000);
})

const confirmationpage=cartpage.checkOutItems();

confirmationpage.submitFormDetails();
confirmationpage.getAlertMessage().should('contain','Success');

  //method-1
  





 /*

  //method-2
  let productAmount = 0; // Initialize the productAmount variable

cy.get('tr td:nth-child(4) strong').each(($e1, index) => {
  cy.wrap($e1).invoke('text').then((text) => {
    // Extract numbers using regex
    const numbers = text.match(/\d+/g); 
    
    // Check if numbers were found
    if (numbers) {
      // Convert each number from string to integer and add to productAmount
      numbers.forEach(num => {
        productAmount += parseInt(num, 10); // Add the parsed integer value
      });
    }
  });
}).then(() => {
  // You can use productAmount after all iterations have completed
  cy.log('Total Product Amount:', productAmount); // Log for verification
  // You can also use assertions here based on the value of productAmount
  expect(productAmount).to.be.lessThan(200000); // Example assertion


});


*/

 })

})