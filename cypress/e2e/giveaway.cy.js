import * as page from '../fixtures/URLs.json';
import ProfilePage from '../support/page_objects/profilePage';

describe('Mark item as Given Away for a user test suite', () => {
  beforeEach(() => {
    cy.login(Cypress.env('donorLoginEmail'), Cypress.env('loginPassword'));
  });

  it('user can mark an item as Given Away for a user that reserved it', () => {
    cy.visit(page.profile, { failOnStatusCode: false });
    ProfilePage.giveAwayButton('give_away').click();
    cy.get('button').contains('Confirm').should('be.visible').click();
    cy.get('.card')
      .contains('give_away')
      .parents('li')
      .find('p')
      .contains('GIVEN AWAY', { matchCase: false })
      .should('be.visible');
  });
});
