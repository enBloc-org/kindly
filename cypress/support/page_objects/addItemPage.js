import ItemForm from './itemForm';

export class AddItemPage extends ItemForm {
  uploadImageButton() {
    return cy.get('input[name="image"]').should('be.visible');
  }

  addYourItemButton() {
    return cy.get('button[aria-label="ADD YOUR ITEM"]').should('be.visible');
  }
  itemAddedMessage() {
    return cy.get('h1').contains('You have successfully added an item');
  }
}

export default new AddItemPage();
