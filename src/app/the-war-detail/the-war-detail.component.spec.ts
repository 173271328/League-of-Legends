import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheWarDetailComponent } from './the-war-detail.component';

describe('TheWarDetailComponent', () => {
  let component: TheWarDetailComponent;
  let fixture: ComponentFixture<TheWarDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheWarDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheWarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
