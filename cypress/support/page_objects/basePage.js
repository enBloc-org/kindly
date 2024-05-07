export class BasePage {
  homeButton() {
    return cy.get('a[href="/home-page"]').should('be.visible');
  }

  profileIcon() {
    return cy.get('a[href="/profile"]');
  }
}

export default BasePage;
