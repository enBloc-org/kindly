import searchPage from '../support/page_objects/searchPage';
import * as page from '../fixtures/URLs.json';

describe('search page', () => {
  beforeEach('successfully loads', () => {
    cy.visit(page.search);
  });

  it('search for an item by query', () => {
    searchPage.searchInput().type('blouse');
    searchPage.submitButton().click();
    cy.get('h2').contains('Summer Blouse').should('be.visible');
  });

  it('search by category and subcategory', () => {
    searchPage.filterButton().click();
    cy.get('button').contains('Clothing').click();
    cy.get('button').contains('Women').click();
    cy.get('button').contains('APPLY FILTERS').click();
    cy.get('h2').contains('Summer Blouse').should('be.visible');
  });

  it('clear filters on when button is pressed', () => {
    searchPage.filterButton().click();
    cy.get('button').contains('Clothing').click();
    cy.get('button').contains('Women').click();
    cy.get('button').contains('APPLY FILTERS').click();
    cy.get('h2').contains('Summer Blouse').should('be.visible');

    cy.get('button').contains('CLEAR FILTERS').click();
    cy.get('h2').contains('Brand new sofa').should('be.visible');
  });

  it('correctly handles when filters are use multiple times', () => {
    searchPage.filterButton().click();
    cy.get('button').contains('Clothing').click();
    cy.get('button').contains('Women').click();
    cy.get('button').contains('APPLY FILTERS').click();
    cy.get('h2').contains('Summer Blouse').should('be.visible');

    cy.get('button').contains('Home').click();
    cy.get('button').contains('APPLY FILTERS').click();
    cy.get('h2').contains('Brand new sofa').should('be.visible');
  });
});
