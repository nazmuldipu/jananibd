import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkRateComponent } from './ek-rate.component';

describe('EkRateComponent', () => {
  let component: EkRateComponent;
  let fixture: ComponentFixture<EkRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EkRateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EkRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
