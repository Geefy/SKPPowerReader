export class Reader {
  readerName: string;
  placement: string;
  lastReading: string;
  readerUnit: string;
  date: string;
  readerNumber: string;
  constructor(readerName: string, placement: string, readerUnit: string, lastReading: string, date: string, readerNumber: string) {
    this.readerName = readerName;
    this.placement = placement;
    this.readerUnit = readerUnit;
    this.lastReading = lastReading;
    this.date = date;
    this.readerNumber = readerNumber;
  }
}
