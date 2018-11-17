import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandedComponent } from './landed.component';

describe('LandedComponent', () => {
  let component: LandedComponent;
  let fixture: ComponentFixture<LandedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
