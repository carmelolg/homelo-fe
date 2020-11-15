import { Color } from 'ng2-charts';

export class Constants {
  private static chartColors: Color[] = [{ // grey
    backgroundColor: 'rgba(148,159,177,0.2)',
    borderColor: 'rgba(148,159,177,1)',
    pointBackgroundColor: 'rgba(148,159,177,1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  }];

  static getChartColors(): Color[] {
    return this.chartColors;
  }
}
