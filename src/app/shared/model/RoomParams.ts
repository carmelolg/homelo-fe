export class RoomParams {
  constructor(
    public data?: RoomParam[]
    ) {
      this.data = [];
    }
}

export class RoomParam {
  constructor(
    public temperature?: number,
    public humidity?: number,
    public heatIndex?: number,
    public gas?: number,
    public date?: Date,
    public room?: string,
    public movement?: boolean,
    public lastPassage?: Date
    ) { }
}
