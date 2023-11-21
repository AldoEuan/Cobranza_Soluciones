import { TestBed } from '@angular/core/testing';

import { AdeudosService } from './adeudos.service';

describe('AdeudosService', () => {
  let service: AdeudosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdeudosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
