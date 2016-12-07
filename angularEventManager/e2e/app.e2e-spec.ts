import { AngularEventManagerPage } from './app.po';

describe('angular-event-manager App', function() {
  let page: AngularEventManagerPage;

  beforeEach(() => {
    page = new AngularEventManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
