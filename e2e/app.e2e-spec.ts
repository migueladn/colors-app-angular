import { ColorsAppPage } from './app.po';

describe('colors-app App', function() {
  let page: ColorsAppPage;

  beforeEach(() => {
    page = new ColorsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
