import { TestBed } from '@angular/core/testing';

import { PostnewsService } from './postnews.service';

describe('PostnewsService', () => {
  let service: PostnewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostnewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
