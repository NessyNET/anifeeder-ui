import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedsTableComponent } from './feeds-table.component';

describe('FeedsTableComponent', () => {
  let component: FeedsTableComponent;
  let fixture: ComponentFixture<FeedsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
