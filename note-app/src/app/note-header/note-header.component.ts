import {Component, Input, OnInit} from '@angular/core'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import {AuthService} from '../auth.service'

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

  constructor(public authentication: AuthService) { }

  ngOnInit(): void {
  }

  showCanvas(b: boolean): void {
    this.login = b
    this.open = !this.open
  }

  hideCanvas(): void{
    this.open = false
  }

  keyDown(e: KeyboardEvent): void {
    if (e.key === 'Escape') {
      this.open = false
    }
  }
}
