import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorViewTableComponent } from './sensor-view-table.component';

describe('SensorViewTableComponent', () => {
  let component: SensorViewTableComponent;
  let fixture: ComponentFixture<SensorViewTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorViewTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorViewTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
