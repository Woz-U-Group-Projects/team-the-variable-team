import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdProfileViewComponent } from './std-profile-view.component';

describe('StdProfileViewComponent', () => {
  let component: StdProfileViewComponent;
  let fixture: ComponentFixture<StdProfileViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdProfileViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
