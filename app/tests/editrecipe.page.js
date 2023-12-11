import { Selector } from 'testcafe';
// import { navBar } from './navbar.component';

class EditRecipePage {
  constructor() {
    this.pageId = '#edit-recipe-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  /** Fills out and submits the form to signin, then checks to see that login was successful. */
  async editRecipe(testController) {
    // Capture the initial recipe name
    const initialName = await Selector('#edit-recipe-name').value;

    // Data for form
    const newName = `new-recipe-name-${new Date().getTime()}`;

    // Change the recipe name
    await testController.click('#edit-recipe-name');
    await testController.pressKey('ctrl+a delete');
    await testController.typeText('#edit-recipe-name', newName);
    await testController.click('#edit-recipe-submit input.btn.btn-primary');
    await testController.click(Selector('.swal-button--confirm'));

    // Restore the initial recipe name
    await testController.click('#edit-recipe-name');
    await testController.pressKey('ctrl+a delete');
    await testController.typeText('#edit-recipe-name', initialName);
    await testController.click('#edit-recipe-submit input.btn.btn-primary');
    await testController.click(Selector('.swal-button--confirm'));
  }
}

export const editRecipePage = new EditRecipePage();
