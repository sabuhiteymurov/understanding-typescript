export default interface Greetable {
  readonly name: string;

  greet(phrase: string): void;
}

interface AddN {
  // Function interface
  (a: number, b: number): number;
}

type AddFn = (a: number, b: number) => number; // Function type

let add: AddFn;

class Person implements Greetable {
  age = 30;

  constructor(public name: string) {}
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  }
}

let user1: Greetable;

user1 = {
  name: 'Sabuhi',
  greet(phrase: string) {
    console.log(phrase + ' ' + this.name);
  },
};

user1.greet('Hi there, - I am');
