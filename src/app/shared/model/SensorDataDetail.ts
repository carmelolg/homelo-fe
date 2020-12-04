export class SensorDataDetail {

  constructor(
    public humidity?: number,
    public temperature?: number,
    public heatIndex?: number,
    public gas?: number,
    public date?: Date
  ){}
}
