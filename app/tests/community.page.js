import { Selector } from 'testcafe';

class CommunityPage {
  constructor() {
    this.pageId = '#community-page';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const communityPage = new CommunityPage();
