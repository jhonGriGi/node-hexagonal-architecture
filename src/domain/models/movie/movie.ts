export class Movie {
  id: string;
  name: string;
  authorEmail: string;

  constructor(id: string, name: string, authorEmail: string) {
    this.id = id;
    this.name = name;
    this.authorEmail = authorEmail;
  }
}
