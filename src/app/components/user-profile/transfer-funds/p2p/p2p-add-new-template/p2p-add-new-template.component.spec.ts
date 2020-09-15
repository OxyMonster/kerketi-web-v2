import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P2pAddNewTemplateComponent } from './p2p-add-new-template.component';

describe('P2pAddNewTemplateComponent', () => {
  let component: P2pAddNewTemplateComponent;
  let fixture: ComponentFixture<P2pAddNewTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P2pAddNewTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P2pAddNewTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
