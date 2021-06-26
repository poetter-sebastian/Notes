import {Injectable} from '@angular/core'
import {Note} from './note';
import {not} from 'rxjs/internal-compatibility';

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
    for (const storedNode of this.getNotes()) {
      if (storedNode.id === note.id) {
        storedNode.title = note.title
        storedNode.message = note.message
        storedNode.last_edited = note.last_edited
      }
    }
  }

  setNotes(notes: Note[]): void {
    this.setItem('notes', JSON.stringify(notes))
    // TODO: resolve merge conflicts
  }
}
