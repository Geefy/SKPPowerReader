export class Reader {
  name: string;
  placement: string;
  lastReading: string;
  readerUnit: string;
  date: string;
  readerNumber: string;
  constructor(name: string, placement: string, readerUnit: string, lastReading: string, date: string, readerNumber: string) {
    this.name = name;
    this.placement = placement;
    this.readerUnit = readerUnit;
    this.lastReading = lastReading;
    this.date = date;
    this.readerNumber = readerNumber;
  }
}
