import { Injectable } from '@angular/core'
import { Note } from './note'
import { NOTES } from './mock-notes'
import { MessageService } from './message.service'
import { catchError, map, tap } from 'rxjs/operators'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import {Observable, of} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private config = {
    host: 'http://localhost:8765/',
    registerURL: 'register',
    createNoteURL: 'createNote',
    notesURL: 'getNotes',
    editNoteURL: 'editNote',
    deleteNoteURL: 'deleteNote'
  }

  constructor(
    private messageService: MessageService,
    private http: HttpClient) { }

  getNotes(): Observable<Note[]> {

    this.http.request('GET', this.config.host, {responseType: 'json'}).subscribe(data => { // @ts-ignore
      console.log(data.data[0])})

    return this.http.get<JSON>(this.config.host)
      .pipe(
        catchError(this.handleError<Note[]>('getNotes', []))
      )
  }

  /** Log a HeroService message with the MessageService */
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
