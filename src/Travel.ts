import Airport from './Airpoirt';
import TravelDate from './TravelDate';

class Travel {
  public _origin: Airport;
  public _destination: Airport;
  public _departureDate: TravelDate;
  public _returnDate: TravelDate;

  constructor(
    origin: string,
    destination: string,
    departureDate: Date,
    returnDate: Date,
  ) {
    this._origin = new Airport(origin);
    this._destination = new Airport(destination);
    this._departureDate = new TravelDate(departureDate);
    this._returnDate = new TravelDate(returnDate);

    this.destination = destination;
    this.departureDate = departureDate;
    this.returnDate = returnDate;
  }

  get origin() {
    return this._origin.code;
  }

  set destination(destination: string) {
    if (destination === this.origin) {
      throw new Error('Origin and destination must be different');
    }
  }

  get destination() {
    return this._destination.code;
  }

  get departureDate() {
    return this._departureDate.date;
  }

  set departureDate(departureDate: Date) {
    this._departureDate.date = departureDate;
  }

  get returnDate() {
    return this._returnDate.date;
  }

  set returnDate(returnDate: Date) {
    if (returnDate <= this._departureDate.date) {
      throw new Error('Return date must be greater than departure date');
    }

    this._returnDate.date = returnDate;
  }
}

export default Travel;