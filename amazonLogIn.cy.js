/// <reference types="cypress" />

describe('Amazon Login and Logout Test', () => {

    // Before each test, visit the Amazon login page
    beforeEach(() => {
        cy.visit('https://www.amazon.com/');
    });

    it('Log in and log out of Amazon', () => {

        // Click on the "Sign In" button
        cy.get('#nav-link-accountList').click();

        // Enter the username (email or phone number)
        cy.get('input[name="email"]').type('ENTER TEST EMAIL');
        cy.get('#continue').click();

        // Enter the password
        cy.get('input[name="password"]').type('PASSWORD TO TEST EMAIL', { log: false }); // 'log: false' hides the password from test logs

        // Click the "Sign In" button
        cy.get('#signInSubmit').click();

        // User is logged in by checking for the greeting message
        cy.get('#nav-link-accountList-nav-line-1').should('contain', 'Hello');

        // Log out - Open the account dropdown
        cy.get('#nav-link-accountList').trigger('mouseover');
        cy.get('#nav-item-signout').click();

        // Assert that the user is logged out by checking for the sign-in option again
        cy.get('#ap_email').should('exist');
    });
});
