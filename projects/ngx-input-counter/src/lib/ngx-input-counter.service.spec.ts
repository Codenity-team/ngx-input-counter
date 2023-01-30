import { TestBed } from '@angular/core/testing';

import { NgxInputCounterService } from './ngx-input-counter.service';

describe('NgxInputCounterService', () => {
  let service: NgxInputCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxInputCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
