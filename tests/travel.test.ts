import { expect } from 'chai'
import Travel from '../src/Travel';

import generateDate from './utils/generateDate';

describe('Create Travel', () => {
  it('devolve um erro se a origem ou destino não tiver 3 caracteres', () => {
    // arrange
    const origin = 'GR';
    const destination = 'CDG';
    const departureDate = new Date('2021-07-01');
    const returnDate = new Date('2021-07-10');

    // act and assert
    expect(() => new Travel(origin, destination, departureDate, returnDate)).to.throw('Invalid airport');
  });

  it('devolve um erro se a origem e destino forem iguais', () => {
    // arrange
    const origin = 'GRU';
    const destination = 'GRU';
    const departureDate = generateDate(7);
    const returnDate = generateDate(15);

    // act and assert
    expect(() => new Travel(origin, destination, departureDate, returnDate)).to.throw('Origin and destination must be different');
  });

  it('devolve um erro se a data de partida for anterior a data atual', () => {
    // arrange
    const origin = 'GRU';
    const destination = 'CDG';
    const departureDate = new Date('2021-07-01');
    const returnDate = new Date('2021-07-10');

    // act and assert
    expect(() => new Travel(origin, destination, departureDate, returnDate)).to.throw('Date must be greater than current date');
  });

  it('devolve um erro se a data de retorno for anterior a data atual', () => {
    // arrange
    const origin = 'GRU';
    const destination = 'CDG';
    const departureDate = new Date('2021-07-10');
    const returnDate = new Date('2021-07-20');

    // act and assert
    expect(() => new Travel(origin, destination, departureDate, returnDate)).to.throw('Date must be greater than current date');
  });


  it('devolve um erro se a data de retorno for anterior a data de partida', () => {
    // arrange
    const origin = 'GRU';
    const destination = 'CDG';
    const departureDate = generateDate(7);
    const returnDate = generateDate(3);

    // act and assert
    expect(() => new Travel(origin, destination, departureDate, returnDate)).to.throw('Return date must be greater than departure date');
  });

  it('devolve um erro se a data de retorno for igual a data de partida', () => {
    // arrange
    const origin = 'GRU';
    const destination = 'CDG';
    const departureDate = generateDate(7);
    const returnDate = generateDate(7);

    // act and assert
    expect(() => new Travel(origin, destination, departureDate, returnDate)).to.throw('Return date must be greater than departure date');
  });

  it('cria uma viagem', () => {
    // arrange
    const origin = 'GRU';
    const destination = 'CDG';
    const departureDate = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
    const returnDate = new Date(departureDate.getTime() + 15 * 24 * 60 * 60 * 1000);  

    // act
    const travel = new Travel(origin, destination, departureDate, returnDate);

    // assert
    expect(travel).to.be.instanceOf(Travel);
    expect(travel).to.have.property('origin', origin);
    expect(travel).to.have.property('destination', destination);
    expect(travel).to.have.property('departureDate', departureDate);
    expect(travel).to.have.property('returnDate', returnDate);
  });

  // it('não deve ser possível alterar a data de origem para uma data anterior a data atual', () => {
  //   // arrange
  //   const origin = 'GRU';
  //   const destination = 'CDG';
  //   const departureDate = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
  //   const returnDate = new Date(departureDate.getTime() + 15 * 24 * 60 * 60 * 1000);  
  //   const travel = new Travel(origin, destination, departureDate, returnDate);

  //   // act and assert
  //   const newDepartureDate = new Date(new Date().getTime() - 15 * 24 * 60 * 60 * 1000);
  //   expect(() => travel.departureDate = newDepartureDate).to.throw('Date must be greater than current date');
  // });
});