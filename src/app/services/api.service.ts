import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Reader } from '../Reader';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readerUrl = 'https://localhost:44397/api/Reader';
  constructor(private http: HttpClient) {
  }
  getReaders(): Observable<Reader[]> {
    return this.http.get<Reader[]>(this.readerUrl);
  }
  updateReader(readerValue: string, readerNumber: string) {
    this.http;
  }

  
}
