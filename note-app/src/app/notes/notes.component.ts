import { Component, OnInit } from '@angular/core'
import {Note} from '../note'
import {NOTES} from '../mock-notes'

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.sass']
})

export class NotesComponent implements OnInit {

  constructor() { }

  notes = NOTES

  selectedNote?: Note

  ngOnInit(): void {
  }
  onSelect(note: Note): void {
    this.selectedNote = note
  }
}
