import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EkRatePakComponent } from './ek-rate-pak.component';

describe('EkRatePakComponent', () => {
  let component: EkRatePakComponent;
  let fixture: ComponentFixture<EkRatePakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EkRatePakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EkRatePakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
