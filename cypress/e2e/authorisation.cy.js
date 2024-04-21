import LoginPage from '../support/page_objects/loginPage';
import HomePage from '../support/page_objects/homePage';
import * as page from '../fixtures/URLs.json';

describe('Authorisation Spec', () => {
  it('User can log in with valid username and password', () => {
    cy.visit(page.login);
    LoginPage.emailInput().type(Cypress.env('loginEmail'));
    LoginPage.passwordInput().type(Cypress.env('loginPassword'));
    LoginPage.loginButton().click();
    HomePage.profileIcon().should('be.visible');
  });
});
