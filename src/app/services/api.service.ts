import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Reader } from '../Reader';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readerUrl = 'api/Reader';
  constructor(private http: HttpClient) {
  }
  public arr: Reader[] = [{
    name: 'Vand',
    placement: 'Kælder',
    lastReading: '120',
    readerUnit: 'KWH',
    date: '12/10/2020',
    readerNumber:'XY9823' 
  },
    {
      name: 'Olie',
      placement: 'Skur',
      lastReading: '12230',
      readerUnit: 'MWH',
      date: '2/3/2021',
      readerNumber: 'HQ42O0'
    },];
  getReaders(): Observable<Reader[]> {
    return this.http.get<Reader[]>(this.readerUrl);
  }
  updateReader(readerValue: string, readerNumber: string) {
    this.http;
  }
  getReadersTest(): Reader[] {
    return this.arr;
  }
  
}
