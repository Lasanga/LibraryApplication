import { async, TestBed } from '@angular/core/testing';
import { OlaLeafRareComponent } from './ola-leaf-rare.component';
describe('OlaLeafRareComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [OlaLeafRareComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(OlaLeafRareComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=ola-leaf-rare.component.spec.js.map