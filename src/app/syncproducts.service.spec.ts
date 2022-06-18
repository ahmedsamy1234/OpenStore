import { TestBed } from '@angular/core/testing';

import { SyncproductsService } from './syncproducts.service';

describe('SyncproductsService', () => {
  let service: SyncproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SyncproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
