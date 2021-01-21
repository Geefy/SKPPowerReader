import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Reader } from '../Reader';
import { ReaderDTO } from '../ReaderDTO';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};
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
  updateReader(readerDTO: ReaderDTO): Observable<any> {
    console.log(readerDTO);
    return this.http.put(this.readerUrl, readerDTO, httpOptions);
  }

  
}
