import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { vendorPage } from './vendors.page';
import { recipesPage } from './recipes.page';
import { mycookbookPage } from './cookbook.page';
import { communityPage } from './community.page';
import { addRecipePage } from './addrecipe.page';
import { signupPage } from './signup.page';
import { editRecipePage } from './editrecipe.page';
import { addStorePage } from './addstore.page';
import { editStorePage } from './editstore.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const student_creds = { username: 'john@foo.com', password: 'changeme' };
const new_creds = { username: `test-${new Date().getTime()}@foo.com`, password: 'changeme' };
const admin_creds = { username: 'admin@foo.com', password: 'changeme' };
const vendor_creds = { username: 'vendor@foo.com', password: 'changeme' };

fixture('meteor-application-template-react localhost test with default db')
  .page('http://localhost:3000');

test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that signin and signout work', async (testController) => {
  await navBar.ensureLogout(testController);
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, student_creds.username, student_creds.password);
  await navBar.isLoggedIn(testController, student_creds.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that signup works', async (testController) => {
  await navBar.ensureLogout(testController);
  await navBar.gotoSignUpPage(testController);
  await signupPage.signupUser(testController, new_creds.username, new_creds.password);
  await navBar.isLoggedIn(testController, new_creds.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that list recipes page shows up', async (testController) => {
  await navBar.gotoRecipesPage(testController);
  await recipesPage.isDisplayed(testController);
});

test('Test that list vendors page shows up', async (testController) => {
  await navBar.gotoVendorPage(testController);
  await vendorPage.isDisplayed(testController);
});

test('Test that community page shows up', async (testController) => {
  await navBar.gotoCommunityPage(testController);
  await communityPage.isDisplayed(testController);
});

test('Test that my cookbook page shows up', async (testController) => {
  await navBar.ensureLogout(testController);
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, student_creds.username, student_creds.password);
  await navBar.isLoggedIn(testController, student_creds.username);
  await navBar.gotoMyCookbookPage(testController);
  await mycookbookPage.isDisplayed(testController);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that add recipe page works', async (testController) => {
  await navBar.ensureLogout(testController);
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, student_creds.username, student_creds.password);
  await navBar.isLoggedIn(testController, student_creds.username);
  await navBar.gotoAddRecipePage(testController);
  await addRecipePage.isDisplayed(testController);
  await addRecipePage.addRecipe(testController);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that edit recipe page works', async (testController) => {
  await navBar.ensureLogout(testController);
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, student_creds.username, student_creds.password);
  await navBar.isLoggedIn(testController, student_creds.username);
  await navBar.gotoEditRecipePage(testController);
  await editRecipePage.isDisplayed(testController);
  await editRecipePage.editRecipe(testController);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that edit recipe page works for admin', async (testController) => {
  await navBar.ensureLogout(testController);
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, admin_creds.username, admin_creds.password);
  await navBar.isLoggedIn(testController, admin_creds.username);
  await navBar.gotoEditRecipePageAdmin(testController);
  await editRecipePage.isDisplayed(testController);
  await editRecipePage.editRecipe(testController);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that add store page works', async (testController) => {
  await navBar.ensureLogout(testController);
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, vendor_creds.username, vendor_creds.password);
  await navBar.isLoggedIn(testController, vendor_creds.username);
  await navBar.gotoAddStorePage(testController);
  await addStorePage.isDisplayed(testController);
  await addStorePage.addRecipe(testController);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that edit store page works', async (testController) => {
  await navBar.ensureLogout(testController);
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, vendor_creds.username, vendor_creds.password);
  await navBar.isLoggedIn(testController, vendor_creds.username);
  await navBar.gotoEditStorePage(testController);
  await editStorePage.isDisplayed(testController);
  await editStorePage.editRecipe(testController);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that edit store page works for admin', async (testController) => {
  await navBar.ensureLogout(testController);
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, admin_creds.username, admin_creds.password);
  await navBar.isLoggedIn(testController, admin_creds.username);
  await navBar.gotoEditStorePageAdmin(testController);
  await editStorePage.isDisplayed(testController);
  await editStorePage.editRecipe(testController);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});
