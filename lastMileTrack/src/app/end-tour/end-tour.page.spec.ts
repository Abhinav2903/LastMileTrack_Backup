import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EndTourPage } from './end-tour.page';

describe('EndTourPage', () => {
  let component: EndTourPage;
  let fixture: ComponentFixture<EndTourPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EndTourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
