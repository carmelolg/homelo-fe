import { GasService } from './gas.service';
import { DatePipe } from '@angular/common';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { BaseChartDirective, Color, Label } from 'ng2-charts';
import { ChartValue } from '../../../shared/model/ChartValue';
import { SensorData } from '../../../shared/model/SensorData';
import { SensorDataDetail } from '../../../shared/model/SensorDataDetail';
import { Constants } from '../../sensor.constants';

@Component({
  selector: 'app-gas',
  templateUrl: './gas.component.html',
  styleUrls: ['./gas.component.scss']
})
export class GasComponent implements OnInit {

  public chartColors: Color[] = Constants.getChartColors();
  public gasSensorDataList: SensorData[] = [];
  @ViewChildren(BaseChartDirective) charts: QueryList<BaseChartDirective>;

  constructor(private gasService: GasService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.init();
  }

  init() {

    let subs = this.gasService.getGasData().subscribe(data => {

      // For each room
      Object.keys(data).forEach(key => {

        // Current data
        let values = data[key] as SensorDataDetail[];

        // Prepare chart values
        let _chartValues: Array<ChartValue> = [];
        _chartValues.push(new ChartValue(values.map(el => el.gas), 'Gas'));

        // Prepare lables on x-axis
        let _chartLabels: Label[] = [];
        _chartLabels = values.map(el => this.datePipe.transform(el.date['$date'], 'HH:mm'));

        // Create final object
        this.gasSensorDataList.push(new SensorData(key, data[key] as SensorDataDetail[], _chartValues, _chartLabels));

        this.charts.forEach((child) => {
          child.chart.update();
        });
      });

      subs.unsubscribe();
    });
  }

}
