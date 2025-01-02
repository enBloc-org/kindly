import ItemForm from './itemForm';

export class EditItemPage extends ItemForm {
  editItemButton() {
    return cy
      .get('button')
      .contains(/edit item/i)
      .should('be.visible');
  }
}

export default new EditItemPage();
