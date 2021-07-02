import {Injectable} from '@angular/core'
import {AuthService} from './auth.service'
import {LocalStorageService} from './local-storage.service'
import {NoteService} from './note.service'
import {Note} from './note'
import {NgForm} from '@angular/forms'
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class RemoteManagingService {

  constructor(
    private authService: AuthService,
    private storageService: LocalStorageService,
    private noteService: NoteService,
    private router: Router,
  ) { }

  callback: any

  public getNotes(notesCallback: (notes: Note[]) => Note[]): void {
    this.authService.getLoginState().then((loggedIn: boolean) => {
      if (loggedIn) {
        console.log('remote-managing.service: try to load online notes')
        this.noteService.getNotes().then(notes => {
          this.storageService.setNotes(notes)
          notesCallback(notes)
        })
      } else {
        console.log('remote-managing.service: try to load offline notes')
        notesCallback(this.storageService.getNotes())
      }
    })
  }

  public addNote(note: Note, form: NgForm): void {
    note.id = Math.floor(Math.random() * (999999 - 1) + 1)
    if (note.last_edited === 0) {
      note.last_edited = Date.now()
    }
    if (note.created === 0) {
      note.created = Date.now()
    }
    console.log('remote-managing.service: addNote')
    this.authService.getLoginState().then((loggedIn: boolean) => {
      if (loggedIn) {
        console.log('remote-managing.service: remote create note')
        this.noteService.createNote(note).then((res) => {
            if (!res) {
              console.log('remote-managing.service: error while add note')
            }
          }
        )
      }
    })
    console.log('remote-managing.service: local add note')
    this.storageService.addNote(note)
    this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this.router.navigate(['Your actualComponent'])
    })
    window.location.reload()
  }

  public deleteNote(id: number): void {
    console.log('remote-managing.service: delete note')
    this.authService.getLoginState().then((loggedIn: boolean) => {
      if (loggedIn) {
        console.log('remote-managing.service: delete remote note')
        this.noteService.deleteNote(id).then(r => r)
      }
      else {
        console.log('remote-managing.service: error while delete remote note')
      }
    }).finally()
    console.log('remote-managing.service: delete local note')
    this.storageService.deleteNote(id)
    window.location.reload()
  }

  /*public async getNote(id: number): Promise<Note | undefined> {
    return await this.getNotes().then((o) => {
      for (const note of o) {
        if (note.id === id) {
          return note
        }
      }
      return undefined
    })
  }*/

  public setNote(note: Note): void {
    console.log('remote-managing.service: try to set online note')
    this.noteService.editNote(note).then(r => r)
    console.log('remote-managing.service: try to set remote note')
    this.storageService.setNote(note)
    window.location.reload()
  }

  public pushOfflineNotes(): void {
    this.authService.getLoginState().then((loggedIn: boolean) => {
      if (loggedIn) {
        this.storageService.getNotes().forEach(note => {
          this.setNote(note)
        })
      } else {
        console.error('couldn\'t push offline notes. still offline?')
      }
      window.location.reload()
    })
    this.callback()
  }
}
