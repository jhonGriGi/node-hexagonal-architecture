export class Movie {
  private readonly id: string;
  private name: string;
  private authorEmail: string;

  constructor(id: string, name: string, authorEmail: string) {
    this.id = id;
    this.name = name;
    this.authorEmail = authorEmail;
  }

  getIdValue() {
    return this.id;
  }

  getNameValue() {
    return this.name;
  }

  getEmailValue() {
    return this.authorEmail;
  }
}
