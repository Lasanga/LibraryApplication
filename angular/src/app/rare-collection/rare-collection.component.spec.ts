import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RareCollectionComponent } from './rare-collection.component';

describe('RareCollectionComponent', () => {
  let component: RareCollectionComponent;
  let fixture: ComponentFixture<RareCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RareCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RareCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
