import * as page from '../fixtures/URLs.json';
import ProfilePage from '../support/page_objects/profilePage';

describe('Reserve and Unreserve item for a user test suite', () => {
  beforeEach(() => {
    cy.login(Cypress.env('donorLoginEmail'), Cypress.env('loginPassword'));
  });

  it('user can mark an item as reserved for a user that has requested it', () => {
    cy.visit(page.profile, { failOnStatusCode: false });
    ProfilePage.reserveButton('shoes').click();
    cy.get('button').contains('Confirm').should('be.visible').click();
    cy.get('.card')
      .contains('shoes')
      .parents('li')
      .find('button')
      .contains('Unreserve')
      .should('be.visible');
    cy.get('p').contains(/reserved/i).should('be.visible');
  });

  it('user can remove the reservation status of their item', () => {
    cy.visit(page.profile, { failOnStatusCode: false });
    cy.get('p').contains(/reserved/i).should('be.visible');
    const unreserveButton = cy
      .get('.card')
      .contains('shoes')
      .parents('li')
      .find('button')
      .contains('Unreserve')
      .should('be.visible');
    unreserveButton.click();
  });
});
