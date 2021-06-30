import {Component, Input, OnInit} from '@angular/core'
import {NoteService} from '../note.service'
import {LocalStorageService} from '../local-storage.service'
import {Note} from '../note'
import {MessageService} from '../message.service'
import {AuthService} from '../auth.service'
import {RemoteManagingService} from '../remote-managing.service'
import {not} from 'rxjs/internal-compatibility'

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
    this.getNotes()
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

  getNotes(): void {
    console.log('note.component: load notes')
    // TODO subscribe to managing service
    this.managingService.callback = this.updateNote.bind(this)
    this.managingService.getNotes((notes: Note[]) => this.notes = notes)
  }
}
