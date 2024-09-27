import forgotPasswordPage from '../support/page_objects/forgotPasswordPage';
import resetPasswordPage from '../support/page_objects/resetPasswordPage';
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

describe('Reset Password Page', () => {
  const newPassword = 'Password123!';
  const confirmPassword = 'Password123!';
  const mismatchedPassword = '321Password!';
  const errorMessageMatch = 'Passwords do not match!';

  it('should display the reset password form', () => {
    cy.visit(page.resetPassword);
    resetPasswordPage.passwordInput().should('exist').should('be.visible');
    resetPasswordPage
      .confirmPasswordInput()
      .should('exist')
      .should('be.visible');
    resetPasswordPage.resetButton().should('exist').should('be.visible');
  });
  it('should allow typing in the password fields', () => {
    cy.visit(page.resetPassword);
    resetPasswordPage.passwordInput().type(newPassword);
    resetPasswordPage.confirmPasswordInput().type(confirmPassword);
    resetPasswordPage.passwordInput().should('have.value', newPassword);
    resetPasswordPage
      .confirmPasswordInput()
      .should('have.value', confirmPassword);
  });
  it('should display an error when passwords do not match', () => {
    cy.visit(page.resetPassword);
    resetPasswordPage.passwordInput().type(newPassword);
    resetPasswordPage.confirmPasswordInput().type(mismatchedPassword);
    resetPasswordPage.resetButton().click();
    resetPasswordPage.message().should('contain.text', errorMessageMatch);
  });
  it('should show error if password is left blank', () => {
    cy.visit(page.resetPassword);
    resetPasswordPage.passwordInput().should('exist').should('be.visible');
    resetPasswordPage
      .confirmPasswordInput()
      .should('exist')
      .should('be.visible');
    resetPasswordPage.confirmPasswordInput().type(confirmPassword);
    resetPasswordPage.resetButton().click();
    cy.get('input[name="password"]').then(($input) => {
      expect($input[0].validationMessage).to.match(
        /Please fill (in|out) this field./gi
      );
    });
  });
});
