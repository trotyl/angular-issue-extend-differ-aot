import { NgTmpFPage } from './app.po';

describe('ng-tmp-f App', () => {
  let page: NgTmpFPage;

  beforeEach(() => {
    page = new NgTmpFPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
