import { TestBed } from '@angular/core/testing';

import { RemoteManagingService } from './remote-managing.service';

describe('RemoteManagingServiceService', () => {
  let service: RemoteManagingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoteManagingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
