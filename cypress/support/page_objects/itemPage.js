import BasePage from './basePage';

export class ItemPage extends BasePage {
  messageButton() {
    return cy.get('button').contains('MESSAGE');
  }
}

export default new ItemPage();
