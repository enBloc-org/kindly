import BasePage from './basePage';

export class AddItemPage extends BasePage {
  nameInput() {
    return cy.get('input[name="item_name"]').should('be.visible');
  }

  descriptionInput() {
    return cy.get('textarea[name="item_description"]').should('be.visible');
  }

  postCodeInput() {
    return cy.get('input[name="postcode"]').should('be.visible');
  }

  conditionDropDown() {
    return cy.get('select[name="condition"]').should('be.visible');
  }

  categoriesDropDown() {
    return cy.get('select[name="item_type"]').should('be.visible');
  }

  sizeInput() {
    return cy.get('input[name="size"]').should('be.visible');
  }

  genderDropDown() {
    return cy.get('select[name="item_subtype"]').should('be.visible');
  }

  willingToPostCheckBox() {
    return cy.get('input[name="postable"]').should('be.visible');
  }

  pickUpCheckBox() {
    return cy.get('input[name="collectible"]').should('be.visible');
  }

  postageCoveredCheckBox() {
    return cy.get('input[name="postage_covered"]').should('be.visible');
  }

  uploadImageButton() {
    return cy.get('input[name="image"]').should('be.visible');
  }

  addYourItemButton() {
    return cy.get('button[aria-label="ADD YOUR ITEM"]').should('be.visible');
  }
  itemAddedMessage() {
    return cy.get('h1').contains("You've successfully add an item");
  }
}

export default new AddItemPage();
