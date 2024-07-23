import BasePage from './basePage';

export class LoginPage extends BasePage {
  loginButton() {
    return cy.get('button').contains('LOG IN').should('be.visible');
  }

  emailInput() {
    return cy.get('input[name="email"]').should('be.visible');
  }

  passwordInput() {
    return cy.get('input[name="password"]').should('be.visible');
  }

  signUpLink() {
    return cy.get('a[href="/signup"]').should('be.visible');
  }

  backButton() {
    return cy.get('button[aria-label="back button"]').should('be.visible');
  }
}

export default new LoginPage();
