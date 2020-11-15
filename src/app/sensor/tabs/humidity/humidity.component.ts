import { DatePipe } from '@angular/common';
import { ChartType } from 'chart.js';
import { SensorDataDetail } from './../../../shared/model/SensorDataDetail';
import { Constants } from './../../sensor.constants';
import { Component, OnInit } from '@angular/core';
import { Color, Label } from 'ng2-charts';
import { SensorData } from '../../../shared/model/SensorData';
import { ChartValue } from '../../../shared/model/ChartValue';

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.scss']
})
export class HumidityComponent implements OnInit {

  public chartColors: Color[] = Constants.getChartColors();
  public chartValues: Array<ChartValue> = [];
  public chartLabels: Label[] = [];
  public chartType: ChartType = 'line';

  public humiditySensorData: SensorData;

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.mockData();
  }

  mockData() {
    let humidityDetails: Array<SensorDataDetail> = new Array();
    let humidityValue: SensorDataDetail = new SensorDataDetail(80, new Date('1968-11-16T06:00:00'));
    let humidityValue2: SensorDataDetail = new SensorDataDetail(75, new Date('1988-11-16T07:00:00'));
    let humidityValue3: SensorDataDetail = new SensorDataDetail(98, new Date('2008-11-16T08:00:00'));
    humidityDetails.push(humidityValue);
    humidityDetails.push(humidityValue2);
    humidityDetails.push(humidityValue3);

    this.humiditySensorData = new SensorData('Humidity', 'Bedroom', new Date(), humidityDetails);

    this.chartValues.push(new ChartValue(humidityDetails.map(el => el.value), this.humiditySensorData.name));
    this.chartLabels = humidityDetails.map(el => this.datePipe.transform(el.date, 'hh:mm'));

  }

}
