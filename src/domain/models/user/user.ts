export class User {
  private readonly id: string;
  private name: string;
  private age: number;
  private email: string;

  constructor(id: string, name: string, age: number, email: string) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.email = email;
  }

  getIdValue() {
    return this.id;
  }

  getNameValue() {
    return this.name;
  }

  getAgeValue() {
    return this.age;
  }

  getEmailValue() {
    return this.email;
  }
}
