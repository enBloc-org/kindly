import AddItemPage from '../support/page_objects/AddItemPage';
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

  it('User can delete the item', () => {
    cy.visit(page.profile, { failOnStatusCode: false });
    ProfilePage.deleteItemButton(uniqueItemName).click();
    ProfilePage.ConfirmDeleteItemButton(uniqueItemName).click();
    ProfilePage.itemCard(uniqueItemName).should('not.exist');
  });
});
