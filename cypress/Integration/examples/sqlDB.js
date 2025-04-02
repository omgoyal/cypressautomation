
describe('this is suite DB', () => {


    it.only("DB test case",()=>{

        
         
        cy.sqlServer("SELECT * FROM [dbo].[Users] WHERE EmailAddress='om.goyal@nagarro.com'")
        .then((result) => {
          expect(result).to.not.be.empty;  // Ensure results exist
          cy.log(`User Email: ${result[0][2]}`);
        });
    })  
    
    
    it.skip("DB test case", () => {
        cy.task("tasks", { query: "select * from [dbo].[UserDetails]" })
  .then((result) => {
    cy.log("Test Query Result:", JSON.stringify(result));
    expect(result).to.not.be.empty;
  });
})
      
})