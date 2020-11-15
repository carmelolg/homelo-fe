import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FullSensorData } from '../../shared/model/FullSensorData';
import { environment } from './../../../environments/environment';
import { TableFilters } from './sensor-view-table-filters/TableFilters';

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

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  search(filters: TableFilters): void {

    this.filters.next(filters);
    this.searchActive.next(true);
    const url: string = this.baseUrl + 'sensor';

    this.http.get(url, {params: filters.toParams()}).subscribe(results => {
      console.log(results as FullSensorData[]);
      this.results.next(results as FullSensorData[]);
    });


  }

  reset(): void{
    this.searchActive.next(false);
    this.results.next([]);
    this.filters.next(new TableFilters());
  }
}
