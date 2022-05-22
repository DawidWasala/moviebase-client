import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, Observable, retry, throwError} from 'rxjs';
import {Movie} from "../model/movie";
const API_URL = 'http://localhost:8080/api/movies';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(API_URL).pipe(
      retry(1),
      catchError(this.httpError)
    )
  }

  getMovie(id: number): Observable<Movie> {
    return this.http.get<Movie>(API_URL + '/' + id).pipe(
      retry(1),
      catchError(this.httpError)
    );
  }

  create(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(API_URL, movie, this.httpOptions).pipe(
      retry(1),
      catchError(this.httpError)
    )
  }

  update(id: number, movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(API_URL + '/' + id, movie, this.httpOptions).pipe(
      retry(1),
      catchError(this.httpError)
    )
  }

  delete(id: number) {
    return this.http.delete(API_URL + '/' + id, this.httpOptions).pipe(
      retry(1),
      catchError(this.httpError)
    );
  }

  httpError(error: any) {
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
