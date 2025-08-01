import { TestBed } from '@angular/core/testing';

import { GiroData } from './giro-data';

describe('GiroData', () => {
  let service: GiroData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GiroData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
