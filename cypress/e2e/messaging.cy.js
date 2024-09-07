import * as page from '../fixtures/URLs.json';
import ConversationsPage from '../support/page_objects/conversationsPage';

describe('messaging feature', () => {
  beforeEach(() => {
    cy.login(Cypress.env('loginEmail'), Cypress.env('loginPassword'));
  });

  it('alerts users for unread messages in a conversation', () => {
    cy.visit(page.message);
    ConversationsPage.notificationDot().should('have.length', 2);
    ConversationsPage.conversationCard().click();
    ConversationsPage.notificationDot().should('have.length', 1);
    ConversationsPage.conversationCard()
      .parents('.conversation-card')
      .find('[name="ellipsis-button"]')
      .click();
    cy.get('button')
      .contains(/mark unread/i)
      .click();
    ConversationsPage.notificationDot().should('have.length', 2);
  });
});
