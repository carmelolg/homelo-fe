import { Component, OnInit } from '@angular/core';
import { Color } from 'ng2-charts';
import { SensorData } from '../shared/model/SensorData';
import { Constants } from './sensor.constants';


@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.scss']
})
export default class SensorComponent implements OnInit {

  public tabs: Array<SensorData> = new Array();
  public chartColors: Color[] = Constants.getChartColors();

  constructor() { }
  ngOnInit() {
  }

}
