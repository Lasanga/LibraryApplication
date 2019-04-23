import { async, TestBed } from '@angular/core/testing';
import { NewspapersRareComponent } from './newspapers-rare.component';
describe('NewspapersRareComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NewspapersRareComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(NewspapersRareComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=newspapers-rare.component.spec.js.map