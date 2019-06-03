import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdPostJobViewComponent } from './std-post-job-view.component';

describe('StdPostJobViewComponent', () => {
  let component: StdPostJobViewComponent;
  let fixture: ComponentFixture<StdPostJobViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdPostJobViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdPostJobViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
