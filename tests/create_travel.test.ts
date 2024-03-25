import { expect } from 'chai'

function createTravel(origin: string, destination: string, departureDate: Date, returnDate: Date) {
  if (origin.length !== 3 || destination.length !== 3) {
    throw new Error('Invalid airport');
  }

  if (origin === destination) {
    throw new Error('Origin and destination must be different');
  }

  if (departureDate >= returnDate) {
    throw new Error('Return date must be greater than departure date');
  }

  if (departureDate < new Date() || returnDate < new Date()) {
    throw new Error('Date must be greater than current date');
  }

  return {
    origin,
    destination,
    departureDate,
    returnDate
  }
}


describe('Create Travel', () => {
  it('devolve um erro se a origem ou destino não tiver 3 caracteres', () => {
    // arrange
    const origin = 'GR';
    const destination = 'CDG';
    const departureDate = new Date('2021-07-01');
    const returnDate = new Date('2021-07-10');

    // act and assert
    expect(() => createTravel(origin, destination, departureDate, returnDate)).to.throw('Invalid airport');
  });

  it('devolve um erro se a origem e destino forem iguais', () => {
    // arrange
    const origin = 'GRU';
    const destination = 'GRU';
    const departureDate = new Date('2021-07-01');
    const returnDate = new Date('2021-07-10');

    // act and assert
    expect(() => createTravel(origin, destination, departureDate, returnDate)).to.throw('Origin and destination must be different');
  });

  it('devolve um erro se a data de retorno for anterior a data de partida', () => {
    // arrange
    const origin = 'GRU';
    const destination = 'CDG';
    const departureDate = new Date('2021-07-10');
    const returnDate = new Date('2021-07-01');

    // act and assert
    expect(() => createTravel(origin, destination, departureDate, returnDate)).to.throw('Return date must be greater than departure date');
  });

  it('devolve um erro se a data de retorno for igual a data de partida', () => {
    // arrange
    const origin = 'GRU';
    const destination = 'CDG';
    const departureDate = new Date('2021-07-10');
    const returnDate = new Date('2021-07-10');

    // act and assert
    expect(() => createTravel(origin, destination, departureDate, returnDate)).to.throw('Return date must be greater than departure date');
  });

  it('devolve um erro se a data de partida for anterior a data atual', () => {
    // arrange
    const origin = 'GRU';
    const destination = 'CDG';
    const departureDate = new Date('2021-07-01');
    const returnDate = new Date('2021-07-10');

    // act and assert
    expect(() => createTravel(origin, destination, departureDate, returnDate)).to.throw('Date must be greater than current date');
  });

  it('devolve um erro se a data de retorno for anterior a data atual', () => {
    // arrange
    const origin = 'GRU';
    const destination = 'CDG';
    const departureDate = new Date('2021-07-10');
    const returnDate = new Date('2021-07-20');

    // act and assert
    expect(() => createTravel(origin, destination, departureDate, returnDate)).to.throw('Date must be greater than current date');
  });

  it('cria uma viagem', () => {
    // arrange
    const origin = 'GRU';
    const destination = 'CDG';
    const departureDate = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
    const returnDate = new Date(departureDate.getTime() + 15 * 24 * 60 * 60 * 1000);  

    // act
    const travel = createTravel(origin, destination, departureDate, returnDate);

    // assert
    expect(travel).to.deep.equal({
      origin: 'GRU',
      destination: 'CDG',
      departureDate,
      returnDate,
    });
  });
});