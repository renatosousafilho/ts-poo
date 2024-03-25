class TravelDate {
  public _date: Date;

  constructor(date: Date) {
    this._date = date;
    
    this.date = date;
  }

  get date() {
    return this._date;
  }

  set date(date: Date) {
    if (date < new Date()) {
      throw new Error('Date must be greater than current date');
    }

    this._date = date;
  }
}

export default TravelDate;