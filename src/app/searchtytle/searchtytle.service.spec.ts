import { TestBed } from '@angular/core/testing';

import { SearchtytleService } from './searchtytle.service';

describe('SearchtytleService', () => {
  let service: SearchtytleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchtytleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
