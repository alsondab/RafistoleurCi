import { TestBed } from '@angular/core/testing';

import { RafistoleurService } from './rafistoleur.service';

describe('RafistoleurService', () => {
  let service: RafistoleurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RafistoleurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
