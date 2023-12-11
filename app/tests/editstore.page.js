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
  async editStore(testController) {
    // Capture the initial store name
    const initialName = await Selector('#edit-store-name').value;

    // Data for form
    const newName = `new-store-name-${new Date().getTime()}`;

    // Change the store name
    await testController.click('#edit-store-name');
    await testController.pressKey('ctrl+a delete');
    await testController.typeText('#edit-store-name', newName);
    await testController.click('#edit-store-submit input.btn.btn-primary');
    await testController.click(Selector('.swal-button--confirm'));

    // Restore the initial store name
    await testController.click('#edit-store-name');
    await testController.pressKey('ctrl+a delete');
    await testController.typeText('#edit-store-name', initialName);
    await testController.click('#edit-store-submit input.btn.btn-primary');
    await testController.click(Selector('.swal-button--confirm'));
  }

}

export const editStorePage = new EditStorePage();
