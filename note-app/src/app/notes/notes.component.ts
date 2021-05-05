import {Component, Input, OnInit} from '@angular/core'
import {NoteService} from '../note.service'
import {LocalStorageService} from '../local-storage.service'
import {Note} from '../note'
import {MessageService} from '../message.service'
import {AuthService} from '../auth.service'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.sass']
})

export class NotesComponent implements OnInit {

  constructor(
    private noteService: NoteService,
    private messageService: MessageService,
    private authentication: AuthService) {}

  notes: Note[] = []
  selectedNote?: Note

  ngOnInit(): void {
    if (this.authentication.getOfflineState() || !this.authentication.getLoginState()) {
      console.log('note.component: not logged in: try to load from local storage')
      const offlineNotes = LocalStorageService.getItem(`note`)
      if (offlineNotes != null) {
        this.notes = JSON.parse(offlineNotes)
      } else {
        console.log('note.component: no stored notes found!')
      }
    } else {
      this.getOnlineNotes()
    }
  }

  onSelect(note: Note): void {
    this.selectedNote = note
    this.messageService.add(`NotesComponent: Selected note id=${note.id}`)
  }

  getOnlineNotes(): void {
    this.noteService.getNotes()
      .subscribe(notes => this.notes = notes)
  }
}
