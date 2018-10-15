import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAssessmentComponent } from './details-assessment.component';

describe('DetailsAssessmentComponent', () => {
  let component: DetailsAssessmentComponent;
  let fixture: ComponentFixture<DetailsAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
