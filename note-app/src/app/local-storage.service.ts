import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public static setItem(key: string, value: string): void {
    localStorage.setItem(key, value)
  }

  public static getItem(key: string): string | null {
    return localStorage.getItem(key)
  }

  public static removeItem(key: string): void{
    localStorage.removeItem(key)
  }

  public static clear(): void{
    localStorage.clear()
  }
}
