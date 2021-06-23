export class Person {
  name: string;
  surname: string;
  gender: string;
  age: number;
  phoneNumber: string;
  email: string;
  country: string;
  id: string;

  constructor(
    name: string,
    surname: string,
    gender: string,
    age: number,
    phoneNumber: string,
    email: string,
    country: string,
    id: string
  ) {
    this.name = name;
    this.surname = surname;
    this.gender = gender;
    this.age = age;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.country = country;
    this.id = id;
  }
}
