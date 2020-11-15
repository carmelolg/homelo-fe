export class FullSensorData {

  constructor(
    public room: string,
    public date: Date,
    public humidity: number,
    public temperature: number
  ){}
}
