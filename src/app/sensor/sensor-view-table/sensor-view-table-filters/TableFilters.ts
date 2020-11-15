export class TableFilters {
  constructor(
    public minDate?: Date,
    public maxDate?: Date,
    public room?: string,
    public offset?: number,
    public itemsPerPage?: number) {

      this.offset = 0;
      this.itemsPerPage = 30;

    }
}
