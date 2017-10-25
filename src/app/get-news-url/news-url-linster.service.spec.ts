import { TestBed, inject } from '@angular/core/testing';

import { NewsUrlLinsterService } from './news-url-linster.service';

describe('NewsUrlLinsterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsUrlLinsterService]
    });
  });

  it('should be created', inject([NewsUrlLinsterService], (service: NewsUrlLinsterService) => {
    expect(service).toBeTruthy();
  }));
});
