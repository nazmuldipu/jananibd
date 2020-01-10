import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JananiFtpComponent } from './janani-ftp.component';

describe('JananiFtpComponent', () => {
  let component: JananiFtpComponent;
  let fixture: ComponentFixture<JananiFtpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JananiFtpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JananiFtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
