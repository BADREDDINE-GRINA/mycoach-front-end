import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportTypeSecComponent } from './sport-type-sec.component';

describe('SportTypeSecComponent', () => {
  let component: SportTypeSecComponent;
  let fixture: ComponentFixture<SportTypeSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportTypeSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SportTypeSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
