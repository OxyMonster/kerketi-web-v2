import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsTemplatesModalComponent } from './payments-templates-modal.component';

describe('PaymentsTemplatesModalComponent', () => {
  let component: PaymentsTemplatesModalComponent;
  let fixture: ComponentFixture<PaymentsTemplatesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentsTemplatesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsTemplatesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
