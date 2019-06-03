import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersSearchComponent } from './employers-search.component';

describe('EmployersSearchComponent', () => {
  let component: EmployersSearchComponent;
  let fixture: ComponentFixture<EmployersSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployersSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployersSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
