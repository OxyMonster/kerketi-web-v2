import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsTemplatesComponent } from './payments-templates.component';

describe('PaymentsTemplatesComponent', () => {
  let component: PaymentsTemplatesComponent;
  let fixture: ComponentFixture<PaymentsTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentsTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
