import { TestBed } from '@angular/core/testing';

import { DeletenewService } from './deletenew.service';

describe('DeletenewService', () => {
  let service: DeletenewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeletenewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
