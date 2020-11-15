import { ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { ChartValue } from './ChartValue';
import { SensorDataDetail } from './SensorDataDetail';
export class SensorData {

  constructor(
    public name: String,
    public room: String,
    public lastUpdate: Date,
    public currentData: Array<SensorDataDetail>
  ){}
}
