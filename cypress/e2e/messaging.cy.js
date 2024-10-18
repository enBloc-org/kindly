import * as page from '../fixtures/URLs.json';
import ConversationsPage from '../support/page_objects/conversationsPage';

describe('messaging feature', () => {
  beforeEach(() => {
    cy.login(Cypress.env('loginEmail'), Cypress.env('loginPassword'));
  });

  it('alerts users for unread messages in a conversation', () => {
    cy.visit(page.conversations);
    ConversationsPage.notificationDot().should('have.length', 2);
    ConversationsPage.conversationCard(/unread to refugee/i).click();
    ConversationsPage.notificationDot().should('have.length', 1);
    ConversationsPage.conversationCard(/unread to refugee/i)
      .parents('.conversation-card')
      .find('[name="ellipsis-button"]')
      .click();
    cy.get('button')
      .contains(/mark unread/i)
      .click();
    ConversationsPage.notificationDot().should('have.length', 2);
  });

  it('allows users to send new messages', () => {
    cy.visit(page.conversations);
    ConversationsPage.messageInput().type('NEW MESSAGE');
    ConversationsPage.messageSubmitButton().click();
    ConversationsPage.messageCard(/new message/i);
  });

  it.only('allows users to delete a conversation', () => {
    cy.visit(page.conversations);
    ConversationsPage.conversationCard(/message 4/i)
      .parents('.conversation-card')
      .find('[name="ellipsis-button"]')
      .click();
    cy.get('button')
      .contains(/delete/i)
      .click();
    cy.get('.overlay')
      .find('button')
      .contains(/delete/i)
      .click();
    cy.get('.conversation-card')
      .contains(/message 4/i)
      .should('not.exist');
  });
});
