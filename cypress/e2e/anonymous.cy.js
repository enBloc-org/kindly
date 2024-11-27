import * as page from '../fixtures/URLs.json';
import HomePage from '../support/page_objects/homePage';
import SearchPage from '../support/page_objects/searchPage';
import ItemPage from '../support/page_objects/itemPage';

Cypress.on(
  'uncaught:exception',
  (err) => !err.message.includes('NEXT_REDIRECT')
);

const redirectTimeout = 10000;

describe('Anonymous Navigation', () => {
  it('Can see recently added items', () => {
    cy.visit(page.home, { failOnStatusCode: false });
    cy.get('.lastItems', { timeout: redirectTimeout }).should(
      'not.contain',
      'Loading...'
    );
    cy.get('.lastItems').then((lastItems) => {
      if (lastItems.find('li').length > 0) {
        cy.get('.lastItems').find('li').should('be.visible');
      } else {
        cy.contains('.lastItems', 'No added items').should('be.visible');
      }
    });
  });

  it('Can browse items', () => {
    cy.visit(page.home, { failOnStatusCode: false });
    HomePage.searchIcon().click();
    cy.location('pathname').should('eq', page.search);
    SearchPage.filterButton().click();
    cy.get('button').contains('Toys').click();
    cy.get('button').contains('APPLY FILTERS').click();
    SearchPage.firstSearchResult().click();
    ItemPage.messageButton().should('not.exist');
  });

  it('Can see about page', () => {
    cy.visit(page.home, { failOnStatusCode: false });
    HomePage.aboutIcon().click();
    cy.location('pathname').should('eq', page.about);
  });

  it('Add item redirects to login', () => {
    cy.visit(page.home, { failOnStatusCode: false });
    HomePage.addItemIcon().click();
    cy.location('pathname', { timeout: redirectTimeout })
      .should('not.eq', page.addItem)
      .should('eq', page.login);
  });

  it('Message redirects to login', () => {
    cy.visit(page.home, { failOnStatusCode: false });
    HomePage.messageIcon().click();
    cy.location('pathname', { timeout: redirectTimeout })
      .should('not.eq', page.message)
      .should('eq', page.login);
  });

  it('Profile redirects to login', () => {
    cy.visit(page.home, { failOnStatusCode: false });
    HomePage.profileIcon().click();
    cy.location('pathname', { timeout: redirectTimeout })
      .should('not.eq', page.profile)
      .should('eq', page.login);
  });
});
