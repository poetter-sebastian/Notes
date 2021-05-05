import { Injectable } from '@angular/core'
import { MessageService } from './message.service'
import { AuthService } from './auth.service'
import { Note } from './note'

import { catchError, map, tap } from 'rxjs/operators'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private messageService: MessageService, private http: HttpClient, private auth: AuthService) { }

  getNotes(): Observable<Note[]> {
    return this.http.get<JSON>(AuthService.auth + AuthService.notes)
      .pipe(
        catchError(this.handleError<Note[]>('getNotes', []))
      )
  }

  createNote(): Observable<any> {
    return this.http.get<JSON>(AuthService.host + AuthService.create)
      .pipe(
        catchError(this.handleError<Note[]>('getNotes', []))
      )
  }

  editNote(e: number): Observable<any> {
    return this.http.get<JSON>(AuthService.host + AuthService.edit)
      .pipe(
        catchError(this.handleError<Note[]>('getNotes', []))
      )
  }

  deleteNote(e: number): Observable<any> {
    return this.http.get<JSON>(AuthService.host + AuthService.delete)
      .pipe(
        catchError(this.handleError<Note[]>('getNotes', []))
      )
  }

  /** Log a NotesService message with the MessageService */
  private log(message: string): void {
    this.messageService.add(`NoteService: ${message}`)
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T): any{
    return(error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error) // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`)

      // Let the app keep running by returning an empty result.
      return of(result as T)
    }
  }
}
