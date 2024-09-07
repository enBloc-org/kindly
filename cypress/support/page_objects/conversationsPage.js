import BasePage from './basePage';

class ConversationsPage extends BasePage {
  /**
   *
   * @param {RegExp} latestMessagePattern expects a RegExp matching the message content of the target ConversationCard
   * @returns a single ConversationCard element with a last message content matching the pattern passed in
   */
  conversationCard(latestMessagePattern) {
    return cy
      .get('.conversation-card')
      .contains(latestMessagePattern)
      .should('be.visible');
  }

  notificationDot() {
    return cy.get('.notification-dot').should('be.visible');
  }

  messageInput() {
    return cy.get('[name="message-input"]').should('be.visible');
  }

  messageSubmitButton() {
    return cy.get('[name="message-submit-button"]').should('be.visible');
  }

  /**
   *
   * @param {RegExp} messagePattern expects a RegExp matching the text of your target MessageCard component
   * @returns a single MessageCard component with a message content matching the pattern passed in
   */
  messageCard(messagePattern) {
    return cy
      .get('.message-card')
      .contains(messagePattern)
      .should('be.visible');
  }
}

export default new ConversationsPage();
