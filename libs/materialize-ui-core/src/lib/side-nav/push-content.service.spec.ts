import { TestBed } from '@angular/core/testing';

import { PushContentService } from './push-content.service';

describe('PushContentService', () => {
  let service: PushContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PushContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
