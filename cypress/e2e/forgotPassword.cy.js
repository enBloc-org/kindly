import forgotPasswordPage from '../support/page_objects/forgotPasswordPage';
import * as page from '../fixtures/URLs.json';

describe('ForgotPassword page spec', () => {
  it('should load Forgot Password page', () => {
    cy.visit(page.forgotPassword);
    cy.url().should('include', '/login/forgot-password');
  });

  it('should show error when the email field is left blank', () => {
    cy.visit(page.forgotPassword);
    forgotPasswordPage.confirmResetButton().click();
    cy.get('input[name="email"]').then(($input) => {
      expect($input[0].validationMessage).to.match(/please fill/gi);
    });
  });

  it('should display a validation error for an invalid email format', () => {
    cy.visit(page.forgotPassword);
    forgotPasswordPage.emailInput().type('invalid-email');
    forgotPasswordPage.confirmResetButton().click();
    cy.get('input[name="email"]').then(($input) => {
      expect($input[0].validationMessage).to.include("Please include an '@'");
    });
  });
  it('should display the user email in the message', () => {
    cy.visit(page.forgotPassword);
    const testEmail = Cypress.env('loginEmail');
    forgotPasswordPage.emailInput().type(testEmail);
    forgotPasswordPage.confirmResetButton().click();
    cy.url().should('include', '/login/forgot-password');
    cy.get('p').should(
      'contain.text',
      `Check your email. Password reset link has been sent to ${testEmail}`
    );
  });
});
