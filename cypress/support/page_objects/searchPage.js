import BasePage from './basePage';

export class SearchPage extends BasePage {
  filterButton() {
    return cy.get('[data-cy="filter-button"]').should('be.visible');
  }

  searchInput() {
    return cy.get('input[placeholder*="Find an item"]').should('be.visible');
  }

  submitButton() {
    return cy.get('button[type="submit"]').should('be.visible');
  }

  firstSearchResult() {
    return cy.get('div.flex.gap-3').first().should('be.visible');
  }
}

export default new SearchPage();
