export class BasePage {
  searchIcon() {
    return cy.get('a[href="/search"]').should('be.visible');
  }

  aboutIcon() {
    return cy.get('a[href="/about"]').should('be.visible');
  }

  addItemIcon() {
    return cy.get('a[href="/add-item"]').should('be.visible');
  }

  messageIcon() {
    return cy.get('a[href="/conversations"]').should('be.visible');
  }

  profileIcon() {
    return cy.get('a[href="/profile"]').should('be.visible');
  }
}

export default BasePage;
