import BasePage from './basePage';

export class ForgotPasswordPage extends BasePage {
  emailInput() {
    return cy.get('input[name="email"]').should('be.visible');
  }
  confirmResetButton() {
    return cy.get('button').contains('Confirm Reset').should('be.visible');
  }
  signUpLink() {
    return cy.get('a[href="/login"]').should('be.visible');
  }
}

export default new ForgotPasswordPage();
