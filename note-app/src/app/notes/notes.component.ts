import { Component, OnInit } from '@angular/core'
import { NoteService } from '../note.service'
import {Note} from '../note'
import { MessageService } from '../message.service'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.sass']
})

export class NotesComponent implements OnInit {

  constructor(private noteService: NoteService, private messageService: MessageService) {}

  notes: Note[] = []

  selectedNote?: Note

  ngOnInit(): void {
    this.getNotes()
  }

  onSelect(note: Note): void {
    this.selectedNote = note
    this.messageService.add(`NotesComponent: Selected note id=${note.id}`)
  }

  getNotes(): void {
    this.noteService.getNotes()
      .subscribe(notes => this.notes = notes)
  }
}
