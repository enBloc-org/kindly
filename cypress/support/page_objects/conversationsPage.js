import BasePage from './basePage';

class ConversationsPage extends BasePage {
  conversationCard() {
    return cy
      .get('[data-testid="card-wrapper"]')
      .contains(/unread to refugee/i)
      .should('be.visible');
  }

  notificationDot() {
    return cy.get('[data-testid="notification-dot"]').should('be.visible');
  }
}

export default new ConversationsPage();
