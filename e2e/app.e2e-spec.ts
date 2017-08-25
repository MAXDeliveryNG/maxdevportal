import { HeimdallPage } from './app.po';

describe('heimdall App', () => {
  let page: HeimdallPage;

  beforeEach(() => {
    page = new HeimdallPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
