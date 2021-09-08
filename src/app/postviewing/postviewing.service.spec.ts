import { TestBed } from '@angular/core/testing';

import { PostviewingService } from './postviewing.service';

describe('PostviewingService', () => {
  let service: PostviewingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostviewingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
