import {Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core'
import {Note} from '../note'
import {RemoteManagingService} from '../remote-managing.service'

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.sass']
})
export class NoteDetailComponent implements OnInit {
  @ViewChild('closeButton') closeButton: any
  @ViewChild('title') title: ElementRef
  @ViewChild('text') text: ElementRef
  @Input() note?: Note

  constructor(private managingService: RemoteManagingService, title: ElementRef, text: ElementRef) {
    this.title = title
    this.text = text
  }

  ngOnInit(): void {
  }

  onSubmit(form: any): void {
    this.closeButton.nativeElement.click()
    if (this.note === undefined) {
      return
    }
    const editedNote = new Note(
      this.note.id, this.title.nativeElement.value,
      this.text.nativeElement.value,
      this.note.created,
      this.note.last_edited)
    this.managingService.setNode(editedNote).then(r => r)
  }

  deleteNote(): void {
    if (this.note === undefined) {
      return
    }
    this.managingService.deleteNote(this.note.id).then(r => r)
  }
}
