import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlaLeafComponent } from './ola-leaf.component';

describe('OlaLeafComponent', () => {
  let component: OlaLeafComponent;
  let fixture: ComponentFixture<OlaLeafComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlaLeafComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlaLeafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
