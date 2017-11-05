import { TestBed, inject } from '@angular/core/testing';

import { GetHeroDetailService } from './get-hero-detail.service';

describe('GetHeroDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetHeroDetailService]
    });
  });

  it('should be created', inject([GetHeroDetailService], (service: GetHeroDetailService) => {
    expect(service).toBeTruthy();
  }));
});
