class Airport {
  constructor(public code: string) {
    if (code.length !== 3) {
      throw new Error('Invalid airport');
    }
  }

  toString(): string {
    return this.code;
  }
}

export default Airport;