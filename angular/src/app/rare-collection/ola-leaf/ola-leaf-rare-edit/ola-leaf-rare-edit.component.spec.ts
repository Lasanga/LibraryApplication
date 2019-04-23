import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlaLeafRareEditComponent } from './ola-leaf-rare-edit.component';

describe('OlaLeafRareEditComponent', () => {
  let component: OlaLeafRareEditComponent;
  let fixture: ComponentFixture<OlaLeafRareEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlaLeafRareEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlaLeafRareEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
