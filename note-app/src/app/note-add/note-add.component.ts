import { Component, OnInit } from '@angular/core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.sass']
})
export class NoteAddComponent implements OnInit {

  constructor() { }

  faAdd = faPlus

  ngOnInit(): void {
  }

}
