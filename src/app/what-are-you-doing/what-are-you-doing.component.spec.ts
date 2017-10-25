import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatAreYouDoingComponent } from './what-are-you-doing.component';

describe('WhatAreYouDoingComponent', () => {
  let component: WhatAreYouDoingComponent;
  let fixture: ComponentFixture<WhatAreYouDoingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatAreYouDoingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatAreYouDoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
