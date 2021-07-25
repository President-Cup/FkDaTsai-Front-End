import { TestBed } from '@angular/core/testing';

import { LikesListService } from './likes-list.service';

describe('LikesListService', () => {
  let service: LikesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
