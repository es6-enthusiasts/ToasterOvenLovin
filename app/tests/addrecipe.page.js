import { Selector } from 'testcafe';
// import { navBar } from './navbar.component';

class AddRecipePage {
  constructor() {
    this.pageId = '#add-recipe-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  /** Fills out and submits the form to signin, then checks to see that login was successful. */
  async addRecipe(testController) {
    // Data for form
    const name = `recipe-${new Date().getTime()}`;
    const image = 'https://joyfoodsunshine.com/wp-content/uploads/2018/02/best-chocolate-chip-cookies-recipe-1.jpg';
    const description = 'This is a description of the recipe';
    const ingredients = 'flour, sugar, eggs';
    const equipment = 'oven, bowl, spoon';
    const instructions = 'This is how to make the dish';
    const restrictions = 'These are the restrictions';
    const cost = '1';
    const servings = '1';
    const time = '1';

    await testController.typeText('#add-recipe-name', name);
    await testController.typeText('#add-recipe-image', image);
    await testController.typeText('#add-recipe-description', description);
    await testController.typeText('#add-recipe-ingredients', ingredients);
    await testController.typeText('#add-recipe-equipment', equipment);
    await testController.typeText('#add-recipe-instructions', instructions);
    await testController.typeText('#add-recipe-restrictions', restrictions);
    await testController.typeText('#add-recipe-cost', cost);
    await testController.typeText('#add-recipe-servings', servings);
    await testController.typeText('#add-recipe-time', time);

    await testController.click('#add-recipe-submit input.btn.btn-primary');
    await testController.click(Selector('.swal-button--confirm'));
  }
}

export const addRecipePage = new AddRecipePage();
