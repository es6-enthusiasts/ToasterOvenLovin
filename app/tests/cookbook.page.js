import { Selector } from 'testcafe';

class MyCookbookPage {
  constructor() {
    this.pageId = '#cookbook-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const mycookbookPage = new MyCookbookPage();
