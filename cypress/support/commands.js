import LoginPage from '../support/page_objects/loginPage';
import HomePage from '../support/page_objects/homePage';
import * as page from '../fixtures/URLs.json';

/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (username, password) => {
  cy.intercept('POST', '/login').as('loginRequest');

  cy.visit(page.login);
  LoginPage.emailInput().type(username);
  LoginPage.passwordInput().type(password);
  LoginPage.loginButton().click();

  cy.wait('@loginRequest').then((interception) => {
    if (interception.response?.statusCode !== 303) {
      cy.log('Login failed with status:', interception.response?.statusCode);
      cy.log('Response body:', interception.response?.body);
    }
  });

  HomePage.profileIcon().should('be.visible');
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
