import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarSecComponent } from './calendar-sec.component';

describe('CalendarSecComponent', () => {
  let component: CalendarSecComponent;
  let fixture: ComponentFixture<CalendarSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
