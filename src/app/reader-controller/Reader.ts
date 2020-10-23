export class Reader {
  name: string;
  readerCategory: string;
  company: string;
  lastReading: string;
  serialNumber: string;
  constructor(name: string, readerCategory: string, company: string, lastReading: string, serialNumber: string) {
    this.name = name;
    this.readerCategory = readerCategory;
    this.company = company;
    this.lastReading = lastReading;
    this.serialNumber = serialNumber;
  }
}
