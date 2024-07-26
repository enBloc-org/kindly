import BasePage from './basePage';

export class SearchPage extends BasePage {
  filterButton() {
    return cy.get('[data-cy="filter-button"]').should('be.visible');
  }

  // toysButton() {
  //   return cy.get('button').contains('Toys').should('be.visible');
  // }

  // seeResultsButton() {
  //   return cy.get('button').contains('APPLY FILTERS').should('be.visible');
  // }

  firstSearchResult() {
    return cy.get('div.flex.gap-3').first().should('be.visible');
  }
}

export default new SearchPage();
