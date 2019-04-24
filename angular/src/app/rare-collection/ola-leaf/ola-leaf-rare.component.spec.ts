import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlaLeafRareComponent } from './ola-leaf-rare.component';

describe('OlaLeafRareComponent', () => {
  let component: OlaLeafRareComponent;
  let fixture: ComponentFixture<OlaLeafRareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlaLeafRareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlaLeafRareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
