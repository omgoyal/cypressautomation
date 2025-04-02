import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor"
import HomePage from "../../../../support/pageObjects/HomePage.js";

Given('I am on ecommerce page', function() {
    this.homePage = new HomePage();
    // Access the URL from the loaded fixture data
    this.homePage.goTo(this.data.url);
  });

When('I login into application',function(){
   
    this.productPage=this.homePage.login(this.data.username,this.data.password);

    this.productPage.pageValidation();
    this.productPage.getCardCount().should('have.length',4);;
})

When('I login into application portal',function(dataTable){
   
    this.productPage=this.homePage.login(dataTable.rawTable[1][0],dataTable.rawTable[1][1]);

    this.productPage.pageValidation();
    this.productPage.getCardCount().should('have.length',4);;
})

When('I add item to Cart and checkout',function(){
    this.productPage.selectProduct(this.data.productName);
    this.productPage.selectFirstProduct();
    this.cartpage=this.productPage.goToCart();

})

When(' validate the total price limit',function(){
    cartpage.sumOfProducts().then(function(sum){
        expect(sum).to.be.lessThan(200000);
      })
}

)

Then('Select the country submit and verify Thankyou',function(){

    const confirmationpage=cartpage.checkOutItems();

confirmationpage.submitFormDetails();
confirmationpage.getAlertMessage().should('contain','Success');
})