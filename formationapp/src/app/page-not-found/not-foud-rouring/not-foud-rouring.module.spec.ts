import { NotFoudRouringModule } from '../not-foud-rouring.module';

describe('NotFoudRouringModule', () => {
  let notFoudRouringModule: NotFoudRouringModule;

  beforeEach(() => {
    notFoudRouringModule = new NotFoudRouringModule();
  });

  it('should create an instance', () => {
    expect(notFoudRouringModule).toBeTruthy();
  });
});
