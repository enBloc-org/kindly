export class BasePage {
  homeButton() {
    return cy.get('a[href="/home-page"]').should('be.visible');
  }
}

export default BasePage;
