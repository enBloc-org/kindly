import * as page from '../fixtures/URLs.json';
import ConversationsPage from '../support/page_objects/conversationsPage';

const refugeeLogIn = () => {
  cy.login(Cypress.env('loginEmail'), Cypress.env('loginPassword'));
};

describe('messaging feature', () => {
  it('alerts users for unread messages in a conversation', () => {
    refugeeLogIn();
    cy.visit(page.conversations);
    ConversationsPage.notificationDot().should('have.length', 2);
    ConversationsPage.conversationCard(/Sorry it's deleted/i).click();
    ConversationsPage.notificationDot().should('have.length', 1);
    ConversationsPage.conversationCard(/Sorry it's deleted/i)
      .parents('.conversation-card')
      .find('[name="ellipsis-button"]')
      .click();
    cy.get('button')
      .contains(/mark unread/i)
      .click();
    ConversationsPage.notificationDot().should('have.length', 2);
  });

  it('allows users to send new messages', () => {
    refugeeLogIn();
    cy.visit(page.conversations);
    ConversationsPage.messageInput().type('NEW MESSAGE');
    ConversationsPage.messageSubmitButton().click();
    ConversationsPage.messageCard(/new message/i);
  });

  it('allows users to delete a conversation', () => {
    refugeeLogIn();
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

  it('allows user to send message where partner has deleted conversation', () => {
    cy.login(Cypress.env('donorLoginEmail'), Cypress.env('loginPassword'));
    cy.visit(page.conversations);
    ConversationsPage.conversationCard(/message 4/i).click();
    ConversationsPage.messageInput().type('Message 4 day 4');
    ConversationsPage.messageSubmitButton().click();
  });

  it('restores conversation for the user who deleted it when the other user sends a message', () => {
    refugeeLogIn();
    cy.visit(page.conversations);
    cy.get('.conversation-card')
      .contains(/message 4/i)
      .should('exist');
  });
});
