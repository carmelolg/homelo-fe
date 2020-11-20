import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { BaseChartDirective, Color, Label } from 'ng2-charts';
import { ChartValue } from '../../../shared/model/ChartValue';
import { SensorData } from '../../../shared/model/SensorData';
import { SensorDataDetail } from './../../../shared/model/SensorDataDetail';
import { Constants } from './../../sensor.constants';
import { TemperatureService } from './temperature.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {

  public chartColors: Color[] = Constants.getChartColors();

  public temperatureSensorDataList: SensorData[] = [];
  @ViewChildren(BaseChartDirective) charts: QueryList<BaseChartDirective>;

  constructor(private temperatureService: TemperatureService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.init();
  }

  init() {
    let subs = this.temperatureService.getTemperatureData().subscribe(data => {

      // For each room
      Object.keys(data).forEach(key => {

        // Current data
        let values = data[key] as SensorDataDetail[];

        // Prepare chart values
        let _chartValues: Array<ChartValue> = [];
        _chartValues.push(new ChartValue(values.map(el => el.value), key));

        // Prepare lables on x-axis
        let _chartLabels: Label[] = [];
        _chartLabels = values.map(el => this.datePipe.transform(el.date['$date'], 'HH:mm'));

        // Create final object
        this.temperatureSensorDataList.push(new SensorData(key, data[key] as SensorDataDetail[], _chartValues, _chartLabels));

        this.charts.forEach((child) => {
          child.chart.update();
        });
      });

      subs.unsubscribe();
    });

  }

}
