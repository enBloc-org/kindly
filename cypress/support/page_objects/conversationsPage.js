import BasePage from './basePage';

class ConversationsPage extends BasePage {
  conversationCard() {
    return cy
      .get('.conversation-card')
      .contains(/unread to refugee/i)
      .should('be.visible');
  }

  notificationDot() {
    return cy.get('.notification-dot').should('be.visible');
  }
}

export default new ConversationsPage();
