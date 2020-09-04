import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P2pTemplatesModalComponent } from './p2p-templates-modal.component';

describe('P2pTemplatesModalComponent', () => {
  let component: P2pTemplatesModalComponent;
  let fixture: ComponentFixture<P2pTemplatesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P2pTemplatesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P2pTemplatesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
