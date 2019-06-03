import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpPostJobViewComponent } from './emp-post-job-view.component';

describe('EmpPostJobViewComponent', () => {
  let component: EmpPostJobViewComponent;
  let fixture: ComponentFixture<EmpPostJobViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpPostJobViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpPostJobViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
