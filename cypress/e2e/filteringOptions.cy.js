import searchPage from '../support/page_objects/searchPage';
import * as page from '../fixtures/URLs.json';

describe('search page', () => {
  beforeEach('successfully loads', () => {
    cy.visit(page.search);
    searchPage.firstSearchResult();
  });

  afterEach('items not matching the search filters are not displayed', () => {
    if (Cypress.currentTest.title === 'clear filters on when button is pressed')
      return;
  cy.get('div.card').contains(/shoes/gi).should('not.exist');
  });

  it('search for an item by query', () => {
    searchPage.searchInput().type('blouse');
    searchPage.submitButton().click();
    searchPage.selectItemCard(/blouse/gi).should('be.visible');
  });

  it('search by category and subcategory', () => {
    searchPage.filterButton().click();
    cy.get('button').contains('Clothing').click();
    cy.get('button').contains('Women').click();
    cy.get('button').contains('APPLY FILTERS').click();
    searchPage.selectItemCard('Summer Blouse').should('be.visible');
  });

  it('search by category and subcategory and query', () => {
    searchPage.searchInput().type('summer');
    searchPage.filterButton().click();
    cy.get('button').contains('Clothing').click();
    cy.get('button').contains('Women').click();
    cy.get('button').contains('APPLY FILTERS').click();
    searchPage.selectItemCard('Summer Blouse').should('be.visible');
  });

  it('clear filters on when button is pressed', () => {
    searchPage.filterButton().click();
    cy.get('button').contains('Clothing').click();
    cy.get('button').contains('Women').click();
    cy.get('button').contains('APPLY FILTERS').click();
    searchPage.selectItemCard('Summer Blouse').should('be.visible');

    cy.get('button').contains('CLEAR FILTERS').click();
    searchPage.selectItemCard('Brand new sofa').should('be.visible');
  });

  it('correctly handles when filters are use multiple times', () => {
    searchPage.filterButton().click();
    cy.get('button').contains('Clothing').click();
    cy.get('button').contains('Women').click();
    cy.get('button').contains('APPLY FILTERS').click();
    searchPage.selectItemCard('Summer Blouse').should('be.visible');

    cy.get('button').contains('Home').click();
    cy.get('button').contains('APPLY FILTERS').click();
    searchPage.selectItemCard('Brand new sofa').should('be.visible');
  });
});
