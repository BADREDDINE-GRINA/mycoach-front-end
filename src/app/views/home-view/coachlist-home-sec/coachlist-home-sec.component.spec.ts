import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachlistHomeSecComponent } from './coachlist-home-sec.component';

describe('CoachlistHomeSecComponent', () => {
  let component: CoachlistHomeSecComponent;
  let fixture: ComponentFixture<CoachlistHomeSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachlistHomeSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachlistHomeSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
