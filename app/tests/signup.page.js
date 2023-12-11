import { Selector } from 'testcafe';
import { navBar } from './navbar.component';

class SignupPage {
  constructor() {
    this.pageId = '#signup-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Checks that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }

  /** Signs up a new user, then checks to see that they are logged in by checking the navbar. */
  async signupUser(testController, username, password) {
    await this.isDisplayed(testController);
    await testController.typeText('#signup-form-email', username);
    await testController.typeText('#signup-form-password', password);
    await testController.typeText('#signup-form-first', 'first');
    await testController.typeText('#signup-form-last', 'last');
    await testController.typeText('#signup-form-image', 'https://joyfoodsunshine.com/wp-content/uploads/2018/02/best-chocolate-chip-cookies-recipe-1.jpg');
    await testController.typeText('#signup-form-address', '1234 Main St');
    await testController.typeText('#signup-form-description', 'Description');
    await testController.click('#signup-form-submit input.btn.btn-primary');
    await testController.click(Selector('.swal-button--confirm'));
    await navBar.isLoggedIn(testController, username);
  }
}

export const signupPage = new SignupPage();
