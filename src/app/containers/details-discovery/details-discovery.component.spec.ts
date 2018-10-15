import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDiscoveryComponent } from './details-discovery.component';

describe('DetailsDiscoveryComponent', () => {
  let component: DetailsDiscoveryComponent;
  let fixture: ComponentFixture<DetailsDiscoveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsDiscoveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDiscoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
