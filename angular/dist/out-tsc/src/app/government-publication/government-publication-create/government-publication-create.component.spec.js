import { async, TestBed } from '@angular/core/testing';
import { GovernmentPublicationCreateComponent } from './government-publication-create.component';
describe('GovernmentPublicationCreateComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [GovernmentPublicationCreateComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(GovernmentPublicationCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=government-publication-create.component.spec.js.map