// Intersection types, Type Guards, Discriminated Unions, Type Casting, Index Properties, Function Overloads, etc.

export type Admin = {
  name: string;
  privilages: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Sabuhi',
  privilages: ['Coding', 'Software Architecture'],
  startDate: new Date(),
};
