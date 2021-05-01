import {Component, Input, OnInit} from '@angular/core'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import {$e} from 'codelyzer/angular/styles/chars';

@Component({
  selector: 'app-note-header',
  templateUrl: './note-header.component.html',
  styleUrls: ['./note-header.component.sass']
})
export class NoteHeaderComponent implements OnInit {
  @Input()title?: string

  open = false
  login = true
  faSign = faSignInAlt

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(b: boolean): void {
    this.login = b
    this.open = !this.open
  }

  keyDown(e: KeyboardEvent): void {
    if (e.key === 'Escape') {
      this.open = false
    }
  }
}
