import { Selector } from 'testcafe';

class EditStorePage {
  constructor() {
    this.pageId = '#edit-store-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  /** Fills out and submits the form to signin, then checks to see that login was successful. */
  async editRecipe(testController) {
    // Data for form
    const name = `new-store-name-${new Date().getTime()}`;

    await testController.typeText('#edit-store-name', name);

    await testController.click('#edit-store-submit input.btn.btn-primary');
    await testController.click(Selector('.swal-button--confirm'));
  }
}

export const editStorePage = new EditStorePage();
