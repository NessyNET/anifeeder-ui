import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedtableComponent } from './feedtable.component';

describe('FeedtableComponent', () => {
    let component: FeedtableComponent;
    let fixture: ComponentFixture<FeedtableComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FeedtableComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FeedtableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
