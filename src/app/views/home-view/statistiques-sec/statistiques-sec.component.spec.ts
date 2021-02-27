import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatistiquesSecComponent } from './statistiques-sec.component';

describe('StatistiquesSecComponent', () => {
  let component: StatistiquesSecComponent;
  let fixture: ComponentFixture<StatistiquesSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatistiquesSecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistiquesSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
