import { TableFilters } from './sensor-view-table-filters/TableFilters';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FullSensorData } from '../../shared/model/FullSensorData';

@Injectable({
  providedIn: 'root'
})
export class SensorViewTableObserverService {

  private results: Subject<FullSensorData[]> = new Subject();
  public results$ = this.results.asObservable();

  private filters: Subject<TableFilters> = new Subject();
  public filters$ = this.filters.asObservable();

  private searchActive: Subject<boolean> = new Subject();
  public searchActive$ = this.searchActive.asObservable();

  constructor(private httpClient: HttpClient) { }

  search(filters: TableFilters): void {

    let data1: FullSensorData = new FullSensorData('Bedroom', new Date(), 80, 22);
    let data2: FullSensorData = new FullSensorData('Bedroom', new Date(), 80, 22);
    let data3: FullSensorData = new FullSensorData('Bedroom', new Date(), 80, 22);
    let array: FullSensorData[] = [];
    array.push(data1);
    array.push(data2);
    array.push(data3);

    this.filters.next(filters);
    this.searchActive.next(true);
    this.results.next(array);
  }

  reset(): void{
    this.searchActive.next(false);
    this.results.next([]);
    this.filters.next(new TableFilters());
  }
}
