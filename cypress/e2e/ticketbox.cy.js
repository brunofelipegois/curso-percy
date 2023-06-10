/// <reference types ="cypress" />

describe('Integration test with visual testing', function () {
    TOKEN = Cypress.env('PERCY_TOKEN'),
    it('Loads the homepage', function () {
        // Load the page or perform any other interactions with the app.
        cy.visit('index.html');

            // Take a snapshot for visual diffing
            cy.percySnapshot();
  });
});