import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P2pOtpConfirmModalComponent } from './p2p-otp-confirm-modal.component';

describe('P2pOtpConfirmModalComponent', () => {
  let component: P2pOtpConfirmModalComponent;
  let fixture: ComponentFixture<P2pOtpConfirmModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P2pOtpConfirmModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P2pOtpConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
