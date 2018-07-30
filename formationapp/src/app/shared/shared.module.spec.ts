import { SHAREDModule } from './shared.module';

describe('SHAREDModule', () => {
  let sHAREDModule: SHAREDModule;

  beforeEach(() => {
    sHAREDModule = new SHAREDModule();
  });

  it('should create an instance', () => {
    expect(sHAREDModule).toBeTruthy();
  });
});
