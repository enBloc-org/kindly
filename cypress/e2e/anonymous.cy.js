import * as page from '../fixtures/URLs.json';
import HomePage from '../support/page_objects/homePage';
import SearchPage from '../support/page_objects/searchPage';
import ItemPage from '../support/page_objects/itemPage';

// ignore redirect exceptions
Cypress.on(
  'uncaught:exception',
  (err) => !err.message.includes('NEXT_REDIRECT')
);

// timeout to wait for redirects (in ms)
const redirectTimeout = 10000;

describe('Anonymous Navigation', () => {
  it('Can browse items', () => {
    // go to home page
    cy.visit(page.home, { failOnStatusCode: false });
    // click search, validate navigation
    HomePage.searchIcon().click();
    cy.location('pathname').should('eq', page.search);
    // click toys
    SearchPage.toysButton().click();
    // click see results
    SearchPage.seeResultsButton().click();
    // click first result, validate navigation
    SearchPage.firstSearchResult().click();
    cy.location('pathname').should('include', page.item);
    // should not be able to message
    ItemPage.messageButton().should('not.exist');
  });

  it('Can see about page', () => {
    // go to home page
    cy.visit(page.home, { failOnStatusCode: false });
    // click about, validate navigation
    HomePage.aboutIcon().click();
    cy.location('pathname').should('eq', page.about);
  });

  it('Add item redirects to login', () => {
    // go to home page
    cy.visit(page.home, { failOnStatusCode: false });
    // click add item, validate navigation
    HomePage.addItemIcon().click();
    cy.location('pathname', { timeout: redirectTimeout })
      .should('not.eq', page.addItem)
      .should('eq', page.login);
  });

  it('Message redirects to login', () => {
    // go to home page
    cy.visit(page.home, { failOnStatusCode: false });
    // click message, validate navigation
    HomePage.messageIcon().click();
    cy.location('pathname', { timeout: redirectTimeout })
      .should('not.eq', page.message)
      .should('eq', page.login);
  });

  it('Profile redirects to login', () => {
    // go to home page
    cy.visit(page.home, { failOnStatusCode: false });
    // click profile, validate navigation
    HomePage.profileIcon().click();
    cy.location('pathname', { timeout: redirectTimeout })
      .should('not.eq', page.profile)
      .should('eq', page.login);
  });
});
