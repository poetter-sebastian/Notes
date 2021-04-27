import { Component, OnInit, Input } from '@angular/core'
import { Note } from '../note'

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.sass']
})
export class NoteDetailComponent implements OnInit {

  @Input() note?: Note

  constructor() { }

  ngOnInit(): void {
  }

}
