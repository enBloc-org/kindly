import BasePage from './basePage';

export class SearchPage extends BasePage {
  filterButton() {
    return cy.get('[data-cy="filter-button"]').should('be.visible');
  }

  searchInput() {
    return cy.get('input[placeholder*="Search..."]').should('be.visible');
  }

  submitButton() {
    return cy.get('button[type="submit"]').should('be.visible');
  }

  firstSearchResult() {
    return cy.get('div.card').first().should('be.visible');
  }

  selectItemCard(itemName) {
    return cy.get('div.card').contains(itemName);
  }
}

export default new SearchPage();
