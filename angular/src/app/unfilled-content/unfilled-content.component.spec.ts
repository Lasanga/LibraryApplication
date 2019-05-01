import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnfilledContentComponent } from './unfilled-content.component';

describe('UnfilledContentComponent', () => {
  let component: UnfilledContentComponent;
  let fixture: ComponentFixture<UnfilledContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnfilledContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnfilledContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
