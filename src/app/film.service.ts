import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Film, Genre, Comment } from './type';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  serverUrl = 'https://movie-api.benoithubert.me';
  filmsPath = '/movies';
  genresPath = '/genres';
  commentPath = '/comments';

  constructor(private http: HttpClient) { 
    this.handleError = this.handleError.bind(this)
  }

  private handleError(error: HttpErrorResponse | string) {

    let errorMessage = '';

    if (typeof error === 'string')
    {
      return throwError(error);

    }
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.errors[0].msg);
      errorMessage = 'A network error occurred. Please come back later'
    } else if (error.status === 401) {
      errorMessage = 'You have been disconnected. Please login again.'

    }
    else {
      errorMessage = 'There are  missing or misformated fields.'

    }
    return throwError(
      errorMessage);
  }
  getAllFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.serverUrl}${this.filmsPath}`).pipe(
      catchError(this.handleError)
    );
  }

  getFilm(id: number): Observable<Film | undefined> {
    return this.http.get<Film>(`${this.serverUrl}${this.filmsPath}/${id}`).pipe(
      catchError(this.handleError));
  }

  getAllGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(`${this.serverUrl}${this.genresPath}`).pipe(
      catchError(this.handleError)
    );
  }

  createComment(id : number ,commentData : Partial<Comment>) : Observable<Comment> {
    return this.http.post<Comment>(`${this.serverUrl}${this.filmsPath}/${id}${this.commentPath}`, commentData).pipe(
      catchError(this.handleError));
  }
}


