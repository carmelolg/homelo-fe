export class FullSensorData {

  constructor(
    public data?: SingleSensorData[],
    public page?: number,
    public total?: number
  ) {
    this.data = [];
  }
}

export class SingleSensorData {
  constructor(
    public room: string,
    public date: Date,
    public humidity: number,
    public temperature: number
  ) { }
}
