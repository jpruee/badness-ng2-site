import { BadnessNg2SitePage } from './app.po';

describe('badness-ng2-site App', () => {
  let page: BadnessNg2SitePage;

  beforeEach(() => {
    page = new BadnessNg2SitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
