import { Person } from "../human";
import { v4 as uuidv4 } from "uuid";
import fetch from "node-fetch";
import { DataType } from "../types/DataType";
import { COUNTRIES } from "../data/country-list";

const MIN_AGE = 18;
const MAX_AGE = 85;

const randomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const createEmailAdress = (name: string, surname: string) =>
  `${name.toLowerCase()}.${surname.toLowerCase()}@example.com`;

const createPhoneNumber = () => {
  let phoneNumber = "";
  for (let i = 0; i < 9; i++) {
    phoneNumber = phoneNumber + randomNumber(0, 9);
  }
  return phoneNumber;
};

const getNationality = () => {
  const index = Math.floor(Math.random() * COUNTRIES.length - 1);
  return COUNTRIES[index];
};

function humanConstructor(data: DataType) {
  const name = data.name.first;
  const surname = data.name.last;
  const gender = data.gender;
  const age = randomNumber(MIN_AGE, MAX_AGE);
  const phoneNumber = createPhoneNumber();
  const email = createEmailAdress(name, surname);
  const country = getNationality();
  const id = uuidv4();

  console.log(
    new Person(name, surname, gender, age, phoneNumber, email, country, id)
  );
}

export async function getUser() {
  try {
    const result = await fetch("https://randomuser.me/api/?inc=name,%20gender");
    const data = await result.json();
    humanConstructor(data.results[0]);
  } catch (err) {
    console.error(err);
  }
}
