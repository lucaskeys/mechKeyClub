import { MechKeyClubPage } from './app.po';

describe('mech-key-club App', function() {
  let page: MechKeyClubPage;

  beforeEach(() => {
    page = new MechKeyClubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
