import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpPostJobComponent } from './emp-post-job.component';

describe('EmpPostJobComponent', () => {
  let component: EmpPostJobComponent;
  let fixture: ComponentFixture<EmpPostJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpPostJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpPostJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
