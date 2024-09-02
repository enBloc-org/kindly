import forgotPasswordPage from '../support/page_objects/forgotPasswordPage';
import * as page from '../fixtures/URLs.json';

describe('ForgotPassword page spec', () => {
  it('should show a validation error when the email field is left blank', () => {
    cy.visit(page.forgotPassword);
    forgotPasswordPage.confirmResetButton().click();
    cy.get('input[name="email"]').then(($input) => {
      expect($input[0].validationMessage).to.eq('Please fill in this field.');
    });
  });
  it('should redirect the user to a success page when filling the valid email form and clicking "Confirm Reset" button', () => {
    cy.visit(page.forgotPassword);
    console.log('Login Email:', Cypress.env('loginEmail'));
    forgotPasswordPage.emailInput().type(Cypress.env('loginEmail'));
    forgotPasswordPage.confirmResetButton().click();
    cy.url().should('include', '/login/confirm');
  });
});
