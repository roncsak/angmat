import { AngmatPage } from './app.po';

describe('angmat App', function() {
  let page: AngmatPage;

  beforeEach(() => {
    page = new AngmatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angmat works!');
  });
});
