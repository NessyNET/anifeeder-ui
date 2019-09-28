import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsContainerComponent } from './requests-container.component';

describe('RequestsContainerComponent', () => {
  let component: RequestsContainerComponent;
  let fixture: ComponentFixture<RequestsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
