import {Component, Input, OnInit} from '@angular/core'
import {NoteService} from '../note.service'
import {LocalStorageService} from '../local-storage.service'
import {Note} from '../note'
import {MessageService} from '../message.service'
import {AuthService} from '../auth.service'
import {RemoteManagingService} from '../remote-managing.service';
import {not} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.sass']
})

export class NotesComponent implements OnInit {

  constructor(
    private managingService: RemoteManagingService,
    private messageService: MessageService
  ) {}

  notes: Note[] = []
  selectedNote?: Note

  ngOnInit(): void {
    this.getOnlineNotes()
    /*
    if (this.authentication.getOfflineState() || !this.authentication.getLoginState()) {
      console.log('note.component: not logged in: try to load from local storage')
      const offlineNotes = LocalStorageService.getItem(`note`)
      if (offlineNotes != null) {
        this.notes = JSON.parse(offlineNotes)
      } else {
        console.log('note.component: no stored notes found!')
      }
    } else {
      console.log('note.component: logged in')
      this.getOnlineNotes()
    }*/
  }

  onSelect(note: Note): void {
    this.selectedNote = note
    this.messageService.add(`NotesComponent: Selected note id=${note.id}`)
  }

  updateNote(note: Note): void {
    for (const existingNotes of this.notes) {
      if (existingNotes.id === note.id) {
        existingNotes.title = note.title
        existingNotes.message = note.message
        existingNotes.last_edited = note.last_edited
        return
      }
    }
    this.notes.push(note)
  }

  getOnlineNotes(): void {
    console.log('note.component: load online notes')
    // TODO subscribe to managing service
    this.managingService.callback = this.updateNote.bind(this)
    this.managingService.getNotes().then(notes => this.notes = notes)
  }
}
