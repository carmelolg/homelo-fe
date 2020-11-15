import { Constants } from './../../sensor.constants';
import { SensorDataDetail } from './../../../shared/model/SensorDataDetail';
import { ChartType } from 'chart.js';
import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Color, Label } from 'ng2-charts';
import { ChartValue } from '../../../shared/model/ChartValue';
import { SensorData } from '../../../shared/model/SensorData';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {

  public chartColors: Color[] = Constants.getChartColors();
  public chartValues: Array<ChartValue> = [];
  public chartLabels: Label[] = [];
  public chartType: ChartType = 'line';

  public temperatureSensorData: SensorData;
  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.mockData();
  }

  mockData() {
    let temperatureDetails: Array<SensorDataDetail> = new Array();
    let temperatureValue: SensorDataDetail = new SensorDataDetail(21, new Date('1968-11-16T06:00:00'));
    let temperatureValue2: SensorDataDetail = new SensorDataDetail(25, new Date('1988-11-16T07:00:00'));
    let temperatureValue3: SensorDataDetail = new SensorDataDetail(30, new Date('2008-11-16T08:00:00'));
    temperatureDetails.push(temperatureValue);
    temperatureDetails.push(temperatureValue2);
    temperatureDetails.push(temperatureValue3);

    this.temperatureSensorData = new SensorData('Temperature', 'Bedroom', new Date(), temperatureDetails);

    this.chartValues.push(new ChartValue(temperatureDetails.map(el => el.value), this.temperatureSensorData.name));
    this.chartLabels = temperatureDetails.map(el => this.datePipe.transform(el.date, 'hh:mm'));

  }

}
