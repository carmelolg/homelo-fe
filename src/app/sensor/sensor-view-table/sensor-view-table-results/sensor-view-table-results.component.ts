import { TableFilters } from './../sensor-view-table-filters/TableFilters';
import { AfterViewInit, Component, OnDestroy, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Subscription } from 'rxjs';
import { FullSensorData } from '../../../shared/model/FullSensorData';
import { SensorViewTableObserverService } from '../sensor-view-table-observer.service';

@Component({
  selector: 'app-sensor-view-table-results',
  templateUrl: './sensor-view-table-results.component.html',
  styleUrls: ['./sensor-view-table-results.component.scss']
})
export class SensorViewTableResultsComponent implements OnInit, OnDestroy {

  isLoading = false;
  searchIsActive = false;
  results: FullSensorData[] = [];
  filters: TableFilters = new TableFilters();
  columns: string[] = ['room', 'date', 'humidity', 'temperature'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  private resultSubscription: Subscription;
  private filtersSubscription: Subscription;
  private searchActiveSubscription: Subscription;

  constructor(private tableObservable: SensorViewTableObserverService) { }

  ngOnInit(): void {
    this.filtersSubscription = this.tableObservable.filters$.subscribe(filters => this.filters = filters);
    this.searchActiveSubscription = this.tableObservable.searchActive$.subscribe(searchIsActive => this.searchIsActive = searchIsActive);
    this.resultSubscription = this.tableObservable.results$.subscribe(results => {
      this.results = results;
      this.initTableFunctions();
    });
  }

  initTableFunctions(): void {
    let _sortSub = this.sort.sortChange.subscribe(sortChanged => {
      this.paginator.pageIndex = 0;
      console.log(sortChanged);
      _sortSub.unsubscribe();
    });

    let _pageSub = this.paginator.page.subscribe(pageInfo => {
      this.filters.offset = pageInfo.pageIndex;
      console.log(this.filters);
      this.tableObservable.search(this.filters);
      _pageSub.unsubscribe();
    });
  }

  ngOnDestroy(): void {
    this.resultSubscription.unsubscribe();
    this.filtersSubscription.unsubscribe();
    this.searchActiveSubscription.unsubscribe();
  }
}
