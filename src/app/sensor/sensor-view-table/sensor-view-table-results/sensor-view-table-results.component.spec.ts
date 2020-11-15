import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorViewTableResultsComponent } from './sensor-view-table-results.component';

describe('SensorViewTableResultsComponent', () => {
  let component: SensorViewTableResultsComponent;
  let fixture: ComponentFixture<SensorViewTableResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorViewTableResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorViewTableResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
