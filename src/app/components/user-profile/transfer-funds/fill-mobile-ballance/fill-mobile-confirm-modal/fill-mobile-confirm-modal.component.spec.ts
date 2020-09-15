import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillMobileConfirmModalComponent } from './fill-mobile-confirm-modal.component';

describe('FillMobileConfirmModalComponent', () => {
  let component: FillMobileConfirmModalComponent;
  let fixture: ComponentFixture<FillMobileConfirmModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillMobileConfirmModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillMobileConfirmModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
