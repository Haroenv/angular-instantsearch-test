import { AngularIsPage } from './app.po';

describe('angular-is App', () => {
  let page: AngularIsPage;

  beforeEach(() => {
    page = new AngularIsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
