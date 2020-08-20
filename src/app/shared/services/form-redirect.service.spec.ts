import { TestBed } from '@angular/core/testing';

import { FormRedirectService } from './form-redirect.service';

describe('FormRedirectService', () => {
  let service: FormRedirectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormRedirectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
