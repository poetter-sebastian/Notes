import {Injectable} from '@angular/core'
import {Note} from './note'
import {not} from 'rxjs/internal-compatibility'

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {
  }

  public addItem(key: string, value: any): void {
    const tmpItems = this.getItem(key)
    if (tmpItems === null) {
      this.setItem(key, JSON.stringify([value]))
    } else {
      const newNotes = JSON.parse(tmpItems) as Note[]
      newNotes.push(value)
      this.setItem(key, JSON.stringify(newNotes))
    }
  }

  public setItem(key: string, value: string): void {
    localStorage.setItem(key, value)
  }

  public getItem(key: string): string | null {
    return localStorage.getItem(key)
  }

  public removeItem(key: string): void {
    localStorage.removeItem(key)
  }

  public clear(): void {
    localStorage.clear()
  }

  getNotes(): Note[] {
    const tmpItems = this.getItem('notes')
    if (tmpItems === null){
      return []
    }else {
      return JSON.parse(tmpItems) as Note[]
    }
  }

  addNote(note: Note): void {
    this.addItem('notes', note)
  }

  setNote(note: Note): void {
    const notes = this.getNotes()
    for (const storedNode of notes) {
      if (storedNode.id === note.id) {
        storedNode.title = note.title
        storedNode.message = note.message
        storedNode.last_edited = note.last_edited
      }
    }
    this.setNotes(notes)
  }

  setNotes(notes: Note[]): void {
    this.setItem('notes', JSON.stringify(notes))
    // TODO: resolve merge conflicts
  }

  deleteNote(id: number): void {
    const notes = this.getNotes()
    notes.forEach((element, index) => {
      if (element.id === id) {
        notes.splice(index, 1)
      }
    })
    this.setNotes(notes)
  }
}
