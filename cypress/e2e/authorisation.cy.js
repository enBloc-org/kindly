import LoginPage from '../support/page_objects/loginPage';
import HomePage from '../support/page_objects/homePage';
import ProfilePage from '../support/page_objects/profilePage';
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
    HomePage.profileIcon().should('not.exist');
  });
});
