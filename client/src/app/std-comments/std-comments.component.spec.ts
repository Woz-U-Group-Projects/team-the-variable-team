import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdCommentsComponent } from './std-comments.component';

describe('StdCommentsComponent', () => {
  let component: StdCommentsComponent;
  let fixture: ComponentFixture<StdCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
