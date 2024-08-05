import * as page from '../fixtures/URLs.json';

describe('Edit user profile and check if the changes are visible after page reload', () => {
  const username = `test_${Date.now()}`;
  beforeEach(() => {
    cy.login(Cypress.env('loginEmail'), Cypress.env('loginPassword'));
  });

  it('User can edit their profile username ', () => {
    cy.visit(page.profile, { failOnStatusCode: false });
    cy.get('button').contains('EDIT').click();
    cy.get('input[name="username"]').clear().type(username);
    cy.get('button').contains('EDIT PROFILE').click();
    cy.reload();
    cy.get('h2').should('contain.text', username);
  });

  it('User can edit their profile image', () => {
    cy.visit(page.profile, { failOnStatusCode: false });
    cy.get('button').contains('EDIT').click();
    cy.get('input[type="file"]').should('exist');
    cy.get('input[type="file"]').selectFile('cypress/fixtures/avatar.jpg', {
      force: true,
    });
    cy.get('button').contains('EDIT PROFILE').click();
    cy.reload();
    cy.get('img[alt="User avatar"]')
      .should('have.attr', 'src')
      .and('match', /profile_/);
  });
});
