import BasePage from './basePage';

export class SignupPage extends BasePage {
  usernameInput() {
    return cy.get('input[name="user_name"]').should('be.visible');
  }

  emailInput() {
    return cy.get('input[name="email"]').should('be.visible');
  }

  passwordInput() {
    return cy.get('input[id="password"]').should('be.visible');
  }

  passwordConfirmationInput() {
    return cy.get('input[id="confirmPassword"]').should('be.visible');
  }

  consentCheckbox() {
    return cy.get('input[id="agreeCheckbox"]').should('be.visible');
  }

  registerButton() {
    return cy.get('button').contains(/register/gi);
  }
}

export default new SignupPage();
