import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P2pTemplatesComponent } from './p2p-templates.component';

describe('P2pTemplatesComponent', () => {
  let component: P2pTemplatesComponent;
  let fixture: ComponentFixture<P2pTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P2pTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P2pTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
