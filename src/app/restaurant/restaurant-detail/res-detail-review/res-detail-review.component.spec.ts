import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResDetailReviewComponent } from './res-detail-review.component';

describe('ResDetailReviewComponent', () => {
  let component: ResDetailReviewComponent;
  let fixture: ComponentFixture<ResDetailReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResDetailReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResDetailReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
