import { TestBed } from '@angular/core/testing';

import { NewsupdateService } from './newsupdate.service';

describe('NewsupdateService', () => {
  let service: NewsupdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsupdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
