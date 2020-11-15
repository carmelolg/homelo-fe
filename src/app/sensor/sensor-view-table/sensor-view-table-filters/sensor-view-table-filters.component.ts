import { TableFilters } from './TableFilters';
import { SensorViewTableObserverService } from './../sensor-view-table-observer.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sensor-view-table-filters',
  templateUrl: './sensor-view-table-filters.component.html',
  styleUrls: ['./sensor-view-table-filters.component.scss']
})
export class SensorViewTableFiltersComponent implements OnInit {

  room = new FormControl();
  startDate = new FormControl();
  endDate = new FormControl();

  rooms: string[] = [];

  constructor(private tableObservable: SensorViewTableObserverService) { }

  ngOnInit(): void {
    this.rooms = this.getRoomsAvailable();
  }

  search(): void {
    this.tableObservable.search(new TableFilters(this.startDate.value,  this.endDate.value, this.room.value));
  }

  reset() : void {
    this.room = new FormControl();
    this.startDate = new FormControl();
    this.endDate = new FormControl();
    this.tableObservable.reset();
  }

  getRoomsAvailable(): string[] {
    return ['Bedroom', 'Kitchen'];
  }
}
