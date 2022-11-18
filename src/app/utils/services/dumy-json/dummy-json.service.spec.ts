import { TestBed } from '@angular/core/testing';

import { DummyJsonService } from './dummy-json.service';

describe('DummyJsonService', () => {
  let service: DummyJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
