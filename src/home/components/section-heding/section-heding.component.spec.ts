import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHedingComponent } from './section-heding.component';

describe('SectionHedingComponent', () => {
  let component: SectionHedingComponent;
  let fixture: ComponentFixture<SectionHedingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionHedingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionHedingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
