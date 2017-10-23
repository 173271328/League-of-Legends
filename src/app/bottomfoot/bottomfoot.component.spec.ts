import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomfootComponent } from './bottomfoot.component';

describe('BottomfootComponent', () => {
  let component: BottomfootComponent;
  let fixture: ComponentFixture<BottomfootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomfootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomfootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
