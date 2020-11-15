import { ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { ChartValue } from './ChartValue';
import { SensorDataDetail } from './SensorDataDetail';
export class SensorData {

  constructor(
    public room: String,
    public currentData: Array<SensorDataDetail>,
    public chartValues?: ChartValue[],
    public chartLabels?: Label[],
    public chartType?: ChartType
  ) {
    this.chartValues = chartValues ? chartValues : [];
    this.chartLabels = chartLabels ? chartLabels : [];
    this.chartType = 'line';

  }
}
