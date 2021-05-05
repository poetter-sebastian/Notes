import { Injectable } from '@angular/core'
import { catchError, map, tap } from 'rxjs/operators'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { MessageService } from './message.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private messageService: MessageService, private http: HttpClient) {
    this.testLogin()
  }

  public static host = 'http://localhost:8765/'
  public static auth = 'api/authenticate'
  public static register = 'api/register'
  public static create = 'api/createNote'
  public static notes = 'api/getNotes'
  public static edit = 'api/editNote'
  public static delete = 'api/deleteNote'

  private isLoggedIn = false
  private offline = false

  public testLogin(): void {
    this.http.post<Error>(AuthService.host + AuthService.auth, {username: 'test', auth: 'test'})
      .pipe(
        catchError(this.handleError('testLogin'))
      ).subscribe(res => {
        if (!res.error) {
          this.isLoggedIn = true
        }
    })
  }

  public getLoginState(): boolean {
    return this.isLoggedIn
  }

  public setLoginState(loggedIn: boolean): void {
    this.isLoggedIn = loggedIn
  }

  public getOfflineState(): boolean {
    return this.offline
  }

  public setOfflineState(offline: boolean): void {
    this.offline = offline
  }

  /** Log a NotesService message with the MessageService */
  private log(message: string): void {
    this.messageService.add(`AuthService: ${message}`)
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
