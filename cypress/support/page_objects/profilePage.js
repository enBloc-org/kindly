import BasePage from './basePage';

export class ProfilePage extends BasePage {
  logoutButton() {
    return cy.get('button').contains('LOG OUT').should('be.visible');
  }

  editButton() {
    return cy.get('button[aria-label="EDIT"]').should('be.visible');
  }

  itemCard(itemName) {
    return cy.contains('.card', itemName);
  }

  editItemButton(itemName) {
    return cy
      .get('.card')
      .contains(itemName)
      .parents('li')
      .find('a')
      .contains(/edit item/gi)
      .should('be.visible');
  }

  deleteItemButton(itemName) {
    return cy
      .get('.card')
      .contains(itemName)
      .parents('li')
      .find('button')
      .contains('Delete Item')
      .should('be.visible');
  }

  ConfirmDeleteItemButton(itemName) {
    return cy
      .get('.card')
      .contains(itemName)
      .parents('li')
      .find('button')
      .contains('Confirm')
      .should('be.visible');
  }

  CancelDeleteItemButton(itemName) {
    return cy
      .get('.card')
      .contains(itemName)
      .parents('li')
      .find('button')
      .contains('Cancel')
      .should('be.visible');
  }

  reserveButton(itemName) {
    return cy
      .get('.card')
      .contains(itemName)
      .parents('li')
      .find('button')
      .contains('Mark as Reserved', { matchCase: false })
      .should('be.visible');
  }

  giveAwayButton(itemName) {
    return cy
      .get('.card')
      .contains(itemName)
      .parents('li')
      .find('button')
      .contains('Give Away', { matchCase: false })
      .should('be.visible');
  }
}

export default new ProfilePage();
