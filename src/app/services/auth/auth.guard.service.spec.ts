import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Auth.GuardService = TestBed.get(Auth.GuardService);
    expect(service).toBeTruthy();
  });
});
