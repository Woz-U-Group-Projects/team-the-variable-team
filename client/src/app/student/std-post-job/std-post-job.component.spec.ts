import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdPostJobComponent } from './std-post-job.component';

describe('StdPostJobComponent', () => {
  let component: StdPostJobComponent;
  let fixture: ComponentFixture<StdPostJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdPostJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdPostJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
