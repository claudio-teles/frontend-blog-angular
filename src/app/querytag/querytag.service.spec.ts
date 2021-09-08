import { TestBed } from '@angular/core/testing';

import { QuerytagService } from './querytag.service';

describe('QuerytagService', () => {
  let service: QuerytagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuerytagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
