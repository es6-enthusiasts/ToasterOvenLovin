import { Selector } from 'testcafe';

class NavBar {

  /** If someone is logged in, then log them out, otherwise do nothing. */
  async ensureLogout(testController) {
    const loggedInUser = await Selector('#navbar-current-user').exists;
    if (loggedInUser) {
      await testController.click('#navbar-current-user');
      await testController.click('#navbar-sign-out');
    }
  }

  async gotoSignInPage(testController) {
    await this.ensureLogout(testController);
    const visible = await Selector('#basic-navbar-nav').visible;
    if (!visible) {
      await testController.click('button.navbar-toggler');
    }
    await testController.click('#login-dropdown');
    await testController.click('#login-dropdown-sign-in');
  }

  /** Check that the specified user is currently logged in. */
  async isLoggedIn(testController, username) {
    const visible = await Selector('#basic-navbar-nav').visible;
    if (!visible) {
      await testController.click('button.navbar-toggler');
    }
    const loggedInUser = Selector('#navbar-current-user').innerText;
    await testController.expect(loggedInUser).eql(username);
  }

  /** Check that someone is logged in, then click items to logout. */
  async logout(testController) {
    await testController.expect(Selector('#navbar-current-user').exists).ok();
    await testController.click('#navbar-current-user');
    await testController.click('#navbar-sign-out');
  }

  /** Pull down login menu, go to sign up page. */
  async gotoSignUpPage(testController) {
    await this.ensureLogout(testController);
    const visible = await Selector('#basic-navbar-nav').visible;
    if (!visible) {
      await testController.click('button.navbar-toggler');
    }
    await testController.click('#login-dropdown');
    await testController.click('#login-dropdown-sign-up');
  }

  async gotoVendorPage(testController) {
    await testController.click('#vendor-nav');
  }

  async gotoRecipesPage(testController) {
    await testController.click('#recipe-nav');
  }

  async gotoMyCookbookPage(testController) {
    await testController.click('#cookbook-nav');
  }

  async gotoMyStoresPage(testController) {
    await testController.click('#stores-nav');
  }

  async gotoCommunityPage(testController) {
    await testController.click('#community-nav');
  }

  async gotoAddRecipePage(testController) {
    await testController.click('#cookbook-nav');
    await testController.click('#add-recipe');
  }

  async gotoEditRecipePage(testController) {
    await testController.click('#cookbook-nav');
    await testController.click('#edit-recipe');
  }

  async gotoEditRecipePageAdmin(testController) {
    await testController.click('#recipe-nav');
    await testController.click('#edit-recipe');
  }

  async gotoAddStorePage(testController) {
    await testController.click('#stores-nav');
    await testController.click('#add-store');
  }

  async gotoEditStorePage(testController) {
    await testController.click('#stores-nav');
    await testController.click('#edit-store');
  }

  async gotoEditStorePageAdmin(testController) {
    await testController.click('#vendor-nav');
    await testController.click('#edit-store');
  }
}

export const navBar = new NavBar();
