import { Injectable } from '@angular/core'
import {catchError, map, retry, tap} from 'rxjs/operators'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { MessageService } from './message.service'
import {LocalStorageService} from './local-storage.service'
import {RemoteManagingService} from './remote-managing.service'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private messageService: MessageService) {
  }

  public static host = 'http://localhost:8765/'
  public static auth = 'api/authenticate'
  public static register = 'api/register'
  public static create = 'api/createNote'
  public static notes = 'api/getNotes'
  public static edit = 'api/editNote'
  public static delete = 'api/deleteNote'

  private offline = false

  public getLoginState(): boolean {
      // this.http.post<Error>(AuthService.host + AuthService.auth, {username: 'test', auth: 'test'})
      //  .toPromise().then(r => console.log('in' + r)).catch(r => console.log('in' + r))
      this.offline = true
      return false
  }

  public getOfflineState(): boolean {
    return this.offline
  }

  public setOfflineState(offline: boolean): void {
    if (this.offline && !offline) {

    }
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
      this.offline = true
      // TODO: send the error to remote logging infrastructure
      console.error(error) // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`)

      // Let the app keep running by returning an empty result.
      return of(result as T)
    }
  }
}
