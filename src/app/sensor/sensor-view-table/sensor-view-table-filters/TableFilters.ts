export class TableFilters {
  constructor(
    public minDate?: Date,
    public maxDate?: Date,
    public room?: string,
    public offset?: number,
    public itemsPerPage?: number) {

    this.offset = 0;
    this.itemsPerPage = 24;

  }

  toParams(): any {

    let params = {};

    if (this.minDate != null) {
      params['startDate'] = this.minDate.toISOString();
    }
    if (this.maxDate != null) {
      params['endDate'] = this.maxDate.toISOString();
    }
    if (this.room != null) {
      params['room'] = this.room;
    }
    if (this.offset != null) {
      params['offset'] = this.offset;
    }
    if (this.itemsPerPage != null) {
      params['itemsPerPage'] = this.itemsPerPage;
    }

    return params;
  }
}
