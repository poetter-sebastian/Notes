export class Note {
  constructor(
    public id: number,
    public title: string,
    public message: string,
    public created: number,
    // tslint:disable-next-line:variable-name
    public last_edited: number
  ) {}
}
