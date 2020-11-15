import { ChartType } from 'chart.js';
import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  homeAddress: String = 'via Vincenzo Porri, 9 Torino 10153'; // TODO Da recuperare da be

  percentage = 80;
  temperature = 22;
  ngOnInit() {
  }

}
