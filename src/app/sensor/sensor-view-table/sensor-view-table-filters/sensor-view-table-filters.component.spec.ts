import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorViewTableFiltersComponent } from './sensor-view-table-filters.component';

describe('SensorViewTableFiltersComponent', () => {
  let component: SensorViewTableFiltersComponent;
  let fixture: ComponentFixture<SensorViewTableFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorViewTableFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorViewTableFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
