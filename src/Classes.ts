export default abstract class Person {
  private employees: string[] = ['John', 'Leo'];

  constructor(protected readonly id: string, public name: string) {
    this.name = name;
  }

  abstract meet(this: Person): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployees() {
    console.log(this.employees);
  }
}

class Student extends Person {
  constructor(id: string, name: string) {
    super(id, 'Student');
  }

  meet() {
    console.log(this.id + '. I am ' + this.name + ' Nice to meet you.');
  }
}

class Worker extends Person {
  constructor(id: string, name: string) {
    super(id, 'Student');
  }
  meet() {
    console.log(this.id + '. I am ' + this.name + ' Nice to meet you.');
  }
}
const worker = new Worker('w1', 'Worker');
const student = new Student('s1', 'Student');

// worker.meet();
// student.meet();
// const SabuhiTeymurov = new Person('ad1', 'Sabuhi Teymurov');
// SabuhiTeymurov.meet();
// SabuhiTeymurov.addEmployee('Anna');
// SabuhiTeymurov.printEmployees();

/*
SabuhiTeymurov.meet();

const Person2 = {
  name: 'Samir',
  meet: SabuhiTeymurov.meet,
};

Person2.meet();
*/
