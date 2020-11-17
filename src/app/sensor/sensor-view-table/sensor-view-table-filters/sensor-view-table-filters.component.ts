import { SensorFilterService } from './sensor-view-table-filters.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { environment } from './../../../../environments/environment';
import { HomeInfo } from './../../../shared/model/HomeInfo';
import { SensorViewTableObserverService } from './../sensor-view-table-observer.service';
import { TableFilters } from './TableFilters';

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

  constructor(private tableObservable: SensorViewTableObserverService, private sensorFilterService: SensorFilterService) { }

  ngOnInit(): void {
    this.getRoomsAvailable();
  }

  search(): void {
    this.tableObservable.search(new TableFilters(this.startDate.value, this.endDate.value, this.room.value));
  }

  reset(): void {
    this.room = new FormControl();
    this.startDate = new FormControl();
    this.endDate = new FormControl();
    this.tableObservable.reset();
  }

  getRoomsAvailable() {
    let infoSub = this.sensorFilterService.getHomeInfo().subscribe(info => {
      const homeInfo = info as HomeInfo;
      this.rooms = homeInfo.rooms;
      infoSub.unsubscribe();
    });
  }
}
