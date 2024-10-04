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

  it('allows users to delete a conversation', () => {
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
    // X alter database seed dont delte one with message for or either with an unread not rugugee user id starts with 4
    // return databse to default content but keep new row might not be nessicary depends on how tests work
    //Xcreate message deleted by doner
    // visit conversation that doner has deleted
    // send message in it
  });
  it('restarts the conversation for the other user if a delted conversation is messaged', () => {
    //prevent before each login
    // login to refugee instead
    //look for new message
  });
});
