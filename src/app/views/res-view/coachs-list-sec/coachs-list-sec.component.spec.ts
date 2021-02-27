import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachsListSecComponent } from './coachs-list-sec.component';

describe('CoachsListSecComponent', () => {
  let component: CoachsListSecComponent;
  let fixture: ComponentFixture<CoachsListSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachsListSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachsListSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
