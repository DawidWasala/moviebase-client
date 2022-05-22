import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Genre} from "../model/genre";
const API_URL = 'http://localhost:8080/api/genres';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(
    private http : HttpClient
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(API_URL).pipe(
        retry(1),
        catchError(this.httpError)
      )
  }

  getGenre(id: number): Observable<Genre> {
    return this.http.get<Genre>(API_URL + '/' + id).pipe(
      retry(1),
      catchError(this.httpError)
    )
  }

  create(genre: Genre): Observable<Genre> {
    return this.http.post<Genre>(API_URL, genre, this.httpOptions).pipe(
      retry(1),
      catchError(this.httpError)
    )
  }

  update(id: number, genre: Genre): Observable<Genre> {
    return this.http.put<Genre>(API_URL + '/' + id, genre, this.httpOptions).pipe(
      retry(1),
      catchError(this.httpError)
    )
  }

  delete(id: number) {
    return this.http.delete<Genre>(API_URL + '/' + id, this.httpOptions).pipe(
      retry(1),
      catchError(this.httpError)
    )
  }

  httpError(error : any) {
    let msg = '';
    if(error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(msg);
    return throwError(msg);
  }
}
