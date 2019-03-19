import { TestBed } from '@angular/core/testing';

import { CartTotalService } from './cart-total.service';

describe('CartTotalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartTotalService = TestBed.get(CartTotalService);
    expect(service).toBeTruthy();
  });
});
