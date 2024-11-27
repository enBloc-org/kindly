import AddItemPage from '../support/page_objects/addItemPage';
import ProfilePage from '../support/page_objects/profilePage';
import * as page from '../fixtures/URLs.json';
import * as data from '../fixtures/inputData.json';

describe('Create and Delete item positive test Suite', () => {
  const uniqueItemName = `${data.itemName}_${Date.now()}`;
  beforeEach(() => {
    cy.login(Cypress.env('loginEmail'), Cypress.env('loginPassword'));
  });

  it('User can create an item. The item is visible in user profile', () => {
    cy.visit(page.addItem, { failOnStatusCode: false });
    AddItemPage.nameInput().type(uniqueItemName);
    AddItemPage.descriptionInput().type(data.itemDescription);
    AddItemPage.postCodeInput().type(data.postCode);
    AddItemPage.conditionDropDown().select(data.itemCondition);
    AddItemPage.categoriesDropDown().select(data.itemCategory);
    AddItemPage.sizeDropDown().select(data.itemShoesSize);
    AddItemPage.genderDropDown().select(data.itemGender);
    AddItemPage.willingToPostCheckBox().check();
    AddItemPage.postageCoveredCheckBox().check();
    AddItemPage.uploadImageButton().selectFile(
      'cypress/fixtures/images/converse.jpg'
    );
    AddItemPage.addYourItemButton().click();
    AddItemPage.itemAddedMessage().should('be.visible');
    AddItemPage.profileIcon().click();
    ProfilePage.itemCard(uniqueItemName).should('be.visible');
  });

  it.only('User can edit an existing item', () => {
    cy.visit(page.profile, { failOnStatusCode: false });
    ProfilePage.editItemButton(data.itemName).click();
    cy.url().should('include', '/edit-item/');
  });

  it('User can delete the item', () => {
    cy.visit(page.profile, { failOnStatusCode: false });

    cy.intercept('DELETE', '**').as('deleteItem');

    cy.log('Clicking delete button');
    ProfilePage.deleteItemButton(uniqueItemName).click();

    cy.log('Clicking confirm delete button');
    ProfilePage.ConfirmDeleteItemButton(uniqueItemName).click();

    cy.log('Waiting for DELETE request');
    cy.wait('@deleteItem').then((interception) => {
      cy.log(`DELETE request intercepted: ${interception.request.url}`);
      expect(interception.response.statusCode).to.eq(204);
    });

    const waitForItemRemoval = (itemName, maxAttempts = 20) => {
      let attempts = 0;
      const checkForItem = () => {
        attempts++;
        return cy.get('body').then(($body) => {
          if (!$body.text().includes(itemName) || attempts >= maxAttempts) {
            return;
          }
          cy.wait(500); // Wait 500ms between checks
          checkForItem();
        });
      };
      checkForItem();
    };

    waitForItemRemoval(uniqueItemName);

    ProfilePage.itemCard(uniqueItemName).should('not.exist');
  });
});
