import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private messageService: MessageService, private http: HttpClient) {
  }

  public static host = 'http://localhost:8765/'
  public static auth = 'api/authenticate'
  public static register = 'api/register'
  public static create = 'api/createNote'
  public static notes = 'api/getNotes'
  public static edit = 'api/editNote'
  public static delete = 'api/deleteNote'

  private offline = false
  private loggedIn = false
  /*private firstTry = true*/

  public getLoginState(): Promise<boolean> {
    // if ((!this.loggedIn && !this.firstTry) || this.offline)
    if (this.loggedIn && !this.offline) {
      console.log('logged in')
      return of(true).toPromise()
    } else {
      const promise = this.http.post(AuthService.host + AuthService.auth, {username: 'test', auth: 'test'}).toPromise()
      return promise.then(res => {
        if (res === undefined) { // || !res.error
          console.log('log in failed')
          this.offline = true
          this.loggedIn = false
        } else {
          console.log('log in success')
          this.offline = false
          this.loggedIn = true
        }
        return this.loggedIn
      }).catch(err => {
        console.log('log in failed')
        this.offline = true
        this.loggedIn = false
        return this.loggedIn
      })

      /*.catch((reason: string) => {
        // TODO: analyze
        console.log('auth.service: ' + reason)
        this.offline = true
        return !this.offline
      })*/
    }
  }

  public getOnline(): boolean {
    return this.loggedIn
  }

  public getOfflineState(): boolean {
    return this.offline
  }

 /* public setOfflineState(offline: boolean): void {
    if (this.offline && !offline) {

    }
    this.offline = offline
  }*/

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
