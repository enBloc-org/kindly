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
  it('Can see recently added items', () => {
    // go to home page
    cy.visit(page.home, { failOnStatusCode: false });
    // wait for loading to complete
    cy.get('.lastItems', { timeout: redirectTimeout }).should(
      'not.contain',
      'Loading...'
    );
    // check if items are displayed or if there is a message for no items
    cy.get('.lastItems').then((lastItems) => {
      if (lastItems.find('li').length > 0) {
        cy.get('.lastItems').find('li').should('be.visible');
      } else {
        cy.contains('.lastItems', 'No added items').should('be.visible');
      }
    });
  });

  it('Can browse items', () => {
    // go to home page
    cy.visit(page.home, { failOnStatusCode: false });
    // click search, validate navigation
    HomePage.searchIcon().click();
    cy.location('pathname').should('eq', page.search);
    // click filter
    SearchPage.filterButton().click();
    // click toys
    cy.get('button').contains('Toys').click();
    // click see results
    cy.get('button').contains('APPLY FILTERS').click();
    // click first result, validate navigation
    SearchPage.firstSearchResult().click();
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
