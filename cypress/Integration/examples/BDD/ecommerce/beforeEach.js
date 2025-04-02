beforeEach(function () {
  // Load fixture data and assign it to 'this.data'
  cy.fixture('example').then(function (data) {
    this.data = data;
  });
});