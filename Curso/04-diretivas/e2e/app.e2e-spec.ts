import { A04diretivasPage } from './app.po';

describe('a04diretivas App', function() {
  let page: A04diretivasPage;

  beforeEach(() => {
    page = new A04diretivasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
