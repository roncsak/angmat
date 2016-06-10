export class AngmatPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angmat-app h1')).getText();
  }
}
