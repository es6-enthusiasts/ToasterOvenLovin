import { Selector } from 'testcafe';
// import { navBar } from './navbar.component';

class AddStorePage {
  constructor() {
    this.pageId = '#add-store-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  /** Fills out and submits the form to signin, then checks to see that login was successful. */
  async addRecipe(testController) {
    // Data for form
    const name = `store-${new Date().getTime()}`;
    const image = 'https://joyfoodsunshine.com/wp-content/uploads/2018/02/best-chocolate-chip-cookies-recipe-1.jpg';
    const location = 'This is a description of the store';
    const hours = '9-5';
    const ingredients = 'ingredient, ingredient, ingredient';

    await testController.typeText('#add-store-name', name);
    await testController.typeText('#add-store-image', image);
    await testController.typeText('#add-store-location', location);
    await testController.typeText('#add-store-hours', hours);
    await testController.typeText('#add-store-ingredients', ingredients);

    await testController.click('#add-store-submit input.btn.btn-primary');
    await testController.click(Selector('.swal-button--confirm'));
  }
}

export const addStorePage = new AddStorePage();
