import { TestBed, inject } from '@angular/core/testing';

import { GetHeroListService } from './get-hero-list.service';

describe('GetHeroListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetHeroListService]
    });
  });

  it('should be created', inject([GetHeroListService], (service: GetHeroListService) => {
    expect(service).toBeTruthy();
  }));
});
