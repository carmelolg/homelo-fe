import { SensorService } from './sensor.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.scss']
})
export default class SensorComponent implements OnInit {

  constructor(private sensorService: SensorService) { }

  ngOnInit() {
  }
}
