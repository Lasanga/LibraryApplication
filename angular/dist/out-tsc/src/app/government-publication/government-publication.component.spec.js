import { async, TestBed } from '@angular/core/testing';
import { GovernmentPublicationComponent } from './government-publication.component';
describe('GovernmentPublicationComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [GovernmentPublicationComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(GovernmentPublicationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=government-publication.component.spec.js.map