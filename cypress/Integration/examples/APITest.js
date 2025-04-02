describe('My first Test Suite', () => {
    it('my first test case', () => {
        cy.request('POST','http://216.10.245.166/Library/Addbook.php', {

            "name":"Learn Appium Automation with Java",
            "isbn":"bcdsss",
            "aisle":"22s7",
            "author":"John foe"
        }).then(function(response) {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('Msg','successfully added')
        })


      
    });
});