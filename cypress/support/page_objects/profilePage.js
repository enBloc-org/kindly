import BasePage from './basePage';

export class ProfilePage extends BasePage {
  logoutButton() {
    return cy.get('button').contains('LOG OUT').should('be.visible');
  }

  editButton() {
    return cy.get('button[aria-label="EDIT"]').should('be.visible');
  }
}

export default new ProfilePage();
