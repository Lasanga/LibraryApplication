import { async, TestBed } from '@angular/core/testing';
import { RareCollectionComponent } from './rare-collection.component';
describe('RareCollectionComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [RareCollectionComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(RareCollectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=rare-collection.component.spec.js.map