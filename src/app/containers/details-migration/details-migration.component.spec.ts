import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMigrationComponent } from './details-migration.component';

describe('DetailsMigrationComponent', () => {
  let component: DetailsMigrationComponent;
  let fixture: ComponentFixture<DetailsMigrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsMigrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsMigrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
