import { TestBed, inject } from '@angular/core/testing';

import { CollectionGuardService } from './collection-guard.service';

describe('CollectionGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollectionGuardService]
    });
  });

  it('should be created', inject([CollectionGuardService], (service: CollectionGuardService) => {
    expect(service).toBeTruthy();
  }));
});
