import {Component, Inject, OnInit, ViewChild} from '@angular/core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {Note} from '../note'
import { DOCUMENT } from '@angular/common'
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {LocalStorageService} from '../local-storage.service'
import {RemoteManagingService} from '../remote-managing.service'

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.sass']
})
export class NoteAddComponent implements OnInit {
  @ViewChild('closeButton') closeButton: any

  constructor(
    private managingService: RemoteManagingService
  ) {}

  faAdd = faPlus
  model = new Note(0, '', '', 0, 0)
  submitted = false

  onSubmit(form: NgForm): void {
    this.closeButton.nativeElement.click()
    console.log(this.model)
    this.managingService.addNote(this.model, form).then(r => r)
    this.submitted = true
  }

  ngOnInit(): void {
  }
}
