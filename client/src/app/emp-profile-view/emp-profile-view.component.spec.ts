import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpProfileViewComponent } from './emp-profile-view.component';

describe('EmpProfileViewComponent', () => {
  let component: EmpProfileViewComponent;
  let fixture: ComponentFixture<EmpProfileViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpProfileViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
