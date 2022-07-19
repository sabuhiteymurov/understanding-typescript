// Intersection types, Type Guards, Discriminated Unions, Type Casting, Index Properties, Function Overloads, etc.

import { dblClick } from '@testing-library/user-event/dist/click';
import { ConciseBody } from 'typescript';

export type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Sabuhi',
  privileges: ['Coding', 'Software Architecture'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // types the union types have in common: number

// Function Overloads
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    // This is a typeguard
    return a.toString() + b.toString();
  }
  return a + b;
}

type UnkownEmployee = Employee | Admin;

const printEmployeeInformation = (emp: UnkownEmployee) => {
  console.log('Name:' + emp.name);
  if ('privileges' in emp) {
    console.log('Privileges' + emp.privileges);
  }
};

// Discriminated Unions
interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) => {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }
  console.log('Moving at speed: ' + speed);
};

moveAnimal({ type: 'bird', flyingSpeed: 10 });

// Type Casting
// const userInputElement = <HTMLInputElement> document.getElementById('user-input')!; // Type Casting syntax 1

// prettier-ignore
const userInputElement = document.getElementById('user-input')! as HTMLInputElement; // Type Casting syntax 2
if (userInputElement) {
  userInputElement.value = 'Hi there';
}
// userInputElement.value = 'hello, there';

// Index properties
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email',
  username: 'Must start with a capital character',
};

// Optional Chaining
const fetchedUserData = {
  id: 'u1',
  name: 'Sabuhi',
  job: { title: 'Founder', description: 'My own company' },
};

console.log(fetchedUserData?.job?.title);
