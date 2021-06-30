import {Injectable, OnInit} from '@angular/core'
import {AuthService} from './auth.service'
import {LocalStorageService} from './local-storage.service'
import {NoteService} from './note.service'
import {Note} from './note'
import {of} from 'rxjs'
import {NgForm} from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class RemoteManagingService {

  constructor(
    private authService: AuthService,
    private storageService: LocalStorageService,
    private noteService: NoteService,
  ) { }

  callback: any

  public async getNotes(): Promise<Array<Note>> {
    if (this.authService.getLoginState()) {
      console.log('remote-managing.service: try to load online notes')
      return this.noteService.getNotes().toPromise().then(notes => {
        this.storageService.setNotes(notes)
        return notes
      })
    } else {
      return this.getOfflineNotes()
    }
  }

  public getOfflineNotes(): Array<Note> {
    console.log('remote-managing.service: try to load offline notes')
    return this.storageService.getNotes()
  }

  public async addNote(note: Note, form: NgForm): Promise<any> {
    note.id = Math.floor(Math.random() * (99999 - 1) + 1)
    if (note.last_edited === 0) {
      note.last_edited = Date.now()
    }
    if (note.created === 0) {
      note.created = Date.now()
    }
    // TODO: subscriber.notify
    this.callback(note)
    console.log('remote-managing.service: callback called')
    if (this.authService.getLoginState(this.getNotes.bind(this))) {
      console.log('remote-managing.service: remote create note')
      this.noteService.createNote(note)
    } else {
      console.log('remote-managing.service: local add note')
      this.storageService.addNote(note)
    }
    form.resetForm()
    //window.location.reload()
  }

  public async deleteNote(id: number): Promise<any> {
    console.log('remote-managing.service: delete note')
    if (this.authService.getLoginState(this.getNotes.bind(this))) {
      console.log('remote-managing.service: delete remote note')
      this.noteService.deleteNote(id)
    } else {
      console.log('remote-managing.service: delete local note')
      this.storageService.deleteNote(id)
    }
    //window.location.reload()
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

  public async setNode(note: Note): Promise<any> {
    if (this.authService.getLoginState(this.getNotes.bind(this))) {
      this.noteService.editNote(note)
    } else {
      this.storageService.setNote(note)
    }
    //window.location.reload()
  }

  public async setNotes(notes: Note[]): Promise<any> {
    notes.forEach(note => {
      this.setNode(note)
    })
  }
}
