import { TestBed, inject } from '@angular/core/testing';

import { GetGamerService } from './get-gamer.service';

describe('GetGamerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetGamerService]
    });
  });

  it('should be created', inject([GetGamerService], (service: GetGamerService) => {
    expect(service).toBeTruthy();
  }));
});
