export default function createTravel(origin: string, destination: string, departureDate: Date, returnDate: Date) {
  if (origin.length !== 3 || destination.length !== 3) {
    throw new Error('Invalid airport');
  }

  if (origin === destination) {
    throw new Error('Origin and destination must be different');
  }

  if (departureDate < new Date() || returnDate < new Date()) {
    throw new Error('Date must be greater than current date');
  }

  if (departureDate >= returnDate) {
    throw new Error('Return date must be greater than departure date');
  }

  return {
    origin,
    destination,
    departureDate,
    returnDate
  }
};