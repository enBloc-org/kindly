import BasePage from './basePage';

export class ResetPassword extends BasePage {
  passwordInput() {
    return cy.get('input[name="password"]').should('be.visible');
  }
  confirmPasswordInput() {
    return cy.get("input[name='confirmPassword']").should('be.visible');
  }
  resetButton() {
    return cy.contains('button', 'Reset').should('be.visible');
  }
  message() {
    return cy.get('p').should('be.visible');
  }
}

export default new ResetPassword();
