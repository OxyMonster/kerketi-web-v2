import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P2pTransferNewComponent } from './p2p-transfer-new.component';

describe('P2pTransferNewComponent', () => {
  let component: P2pTransferNewComponent;
  let fixture: ComponentFixture<P2pTransferNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P2pTransferNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P2pTransferNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
