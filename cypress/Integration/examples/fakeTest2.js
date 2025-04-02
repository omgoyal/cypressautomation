describe('My Second Test Suite', () => {
    it('second test case', () => {
        // Add your test logic here
        expect(true).to.equal(true);

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');
        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
            (req) =>{ req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
            req.continue((res)=>{

                //expected(res.statusCode).to.equal(403)
            })
            }
        ).as("dummyurl")
        cy.get("button[class='btn btn-primary']").click();
        cy.wait("@dummyurl")
    
        });

    
});