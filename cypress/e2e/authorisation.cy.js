import LoginPage from '../support/page_objects/loginPage';
import HomePage from '../support/page_objects/homePage';
import ProfilePage from '../support/page_objects/profilePage';
import SignupPage from '../support/page_objects/signupPage';
import * as page from '../fixtures/URLs.json';

describe('Authorisation Spec', () => {
  it('User can log in with valid username and password', () => {
    cy.visit(page.login, { failOnStatusCode: false });
    LoginPage.emailInput().type(Cypress.env('loginEmail'));
    LoginPage.passwordInput().type(Cypress.env('loginPassword'));
    LoginPage.loginButton().click();
    HomePage.profileIcon().should('be.visible');
  });

  it('User can log out', () => {
    cy.login(Cypress.env('loginEmail'), Cypress.env('loginPassword'));
    cy.visit(page.profile, { failOnStatusCode: false });
    ProfilePage.logoutButton().click();
    LoginPage.loginButton().should('be.visible');
  });

  it('Attempting to sign up an existing user will redirect to /login', () => {
    cy.visit(page.signup, { failOnStatusCode: false });
    SignupPage.usernameInput().type('existing user');
    SignupPage.emailInput().type(Cypress.env('loginEmail'));
    SignupPage.passwordInput().type(Cypress.env('loginPassword'));
    SignupPage.passwordConfirmationInput().type(Cypress.env('loginPassword'));
    SignupPage.consentCheckbox().check();
    SignupPage.registerButton().click();
    LoginPage.loginButton().should('be.visible');
    cy.get('p')
      .contains(/user already registered/gi)
      .should('be.visible');
  });
});
