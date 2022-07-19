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

type Combineable = string | number;
type Numeric = number | boolean;

type Universal = Combineable & Numeric; // types the union types have in common: number

// prettier-ignore
const add = (a: Combineable, b: Combineable) => {
  if (typeof a === 'string' || typeof b === 'string') { // This is a typeguard
    return a.toString() + b.toString();
  }
  return a + b;
};

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
