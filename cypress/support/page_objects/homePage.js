import BasePage from './basePage';

export class HomePage extends BasePage {
  profileIcon() {
    return cy.get('a[href="/profile"]').should('be.visible');
  }
}

export default new HomePage();
