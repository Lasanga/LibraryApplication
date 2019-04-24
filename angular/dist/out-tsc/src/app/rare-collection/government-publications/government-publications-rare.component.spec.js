import { async, TestBed } from '@angular/core/testing';
import { GovernmentPublicationsRareComponent } from './government-publications-rare.component';
describe('GovernmentPublicationsRareComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [GovernmentPublicationsRareComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(GovernmentPublicationsRareComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=government-publications-rare.component.spec.js.map