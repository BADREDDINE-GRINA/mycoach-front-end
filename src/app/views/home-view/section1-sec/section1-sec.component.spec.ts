import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section1SecComponent } from './section1-sec.component';

describe('Section1SecComponent', () => {
  let component: Section1SecComponent;
  let fixture: ComponentFixture<Section1SecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section1SecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Section1SecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
