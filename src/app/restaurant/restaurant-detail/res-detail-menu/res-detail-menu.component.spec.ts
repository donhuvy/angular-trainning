import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResDetailMenuComponent } from './res-detail-menu.component';

describe('ResDetailMenuComponent', () => {
  let component: ResDetailMenuComponent;
  let fixture: ComponentFixture<ResDetailMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResDetailMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResDetailMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
