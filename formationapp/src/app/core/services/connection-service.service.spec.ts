import { TestBed, inject } from '@angular/core/testing';

import { ConnectionServiceService } from './connection-service.service';

describe('ConnectionServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConnectionServiceService]
    });
  });

  it('should be created', inject([ConnectionServiceService], (service: ConnectionServiceService) => {
    expect(service).toBeTruthy();
  }));
});
