import { DatePipe } from '@angular/common';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { BaseChartDirective, Color, Label } from 'ng2-charts';
import { ChartValue } from '../../../shared/model/ChartValue';
import { SensorData } from '../../../shared/model/SensorData';
import { SensorDataDetail } from './../../../shared/model/SensorDataDetail';
import { Constants } from './../../sensor.constants';
import { HumidityService } from './humidity.service';

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.scss']
})
export class HumidityComponent implements OnInit {

  public chartColors: Color[] = Constants.getChartColors();
  public humiditySensorDataList: SensorData[] = [];
  @ViewChildren(BaseChartDirective) charts: QueryList<BaseChartDirective>;

  constructor(private humidityService: HumidityService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.init();
  }

  init() {

    let subs = this.humidityService.getHumidityData().subscribe(data => {

      // For each room
      Object.keys(data).forEach(key => {

        // Current data
        let values = data[key] as SensorDataDetail[];

        // Prepare chart values
        let _chartValues: Array<ChartValue> = [];
        _chartValues.push(new ChartValue(values.map(el => el.value), key));

        // Prepare lables on x-axis
        let _chartLabels: Label[] = [];
        _chartLabels = values.map(el => this.datePipe.transform(el.date['$date'], 'hh:mm'));

        // Create final object
        this.humiditySensorDataList.push(new SensorData(key, data[key] as SensorDataDetail[], _chartValues, _chartLabels));

        this.charts.forEach((child) => {
          child.chart.update();
        });
      });

      subs.unsubscribe();
    });
  }

}
