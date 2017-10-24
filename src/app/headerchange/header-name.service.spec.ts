import { TestBed, inject } from '@angular/core/testing';

import { HeaderNameService } from './header-name.service';

describe('HeaderNameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeaderNameService]
    });
  });

  it('should be created', inject([HeaderNameService], (service: HeaderNameService) => {
    expect(service).toBeTruthy();
  }));
});
