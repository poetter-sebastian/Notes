import {Injectable, OnInit} from '@angular/core'
import {AuthService} from './auth.service'
import {LocalStorageService} from './local-storage.service'
import {NoteService} from './note.service'
import {Note} from './note'
import {of} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RemoteManagingService {

  constructor(
    private authService: AuthService,
    private storageService: LocalStorageService,
    private noteService: NoteService
  ) { }

  callback: any

  public async getNotes(): Promise<Array<Note>> {
    if (await this.authService.getLoginState()) {
      return this.noteService.getNotes().toPromise().then(notes => {
        this.storageService.setNotes(notes)
        return notes
      })
    } else {
      return of(this.storageService.getNotes()).toPromise()
    }
  }

  public async addNote(note: Note): Promise<any> {
    // TODO: subscriber.notify
    this.callback(note)
    console.log('callback called')
    if (await this.authService.getLoginState()) {
      console.log('remote create node')
      this.noteService.createNote(note)
    } else {
      console.log('local add note')
      this.storageService.addNote(note)
    }
  }

  public async getNote(id: number): Promise<Note | undefined> {
    return await this.getNotes().then((o) => {
      for (const note of o) {
        if (note.id === id) {
          return note
        }
      }
      return undefined
    })
  }

  public async setNode(id: number, note: Note): Promise<any> {
    note.id = id
    if (await this.authService.getLoginState()) {
      this.noteService.editNote(note)
    } else {
      this.storageService.setNote(note)
    }
  }
}
