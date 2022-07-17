const Basics = () => {
  // const Person: {
  //   name: string;
  //   age: number;
  //   hobbies: string[];
  //   role: [number, string];
  // } = {
  //   name: 'Sabuhi',
  //   age: 30,
  //   hobbies: ['Sports', 'Cooking'],
  //   role: [2, 'author'], // tuple
  // };
  // Person.role.push('admin'); // Doesn't give an error on tuples
  // Person.role[1] = 10;
  // const ADMIN = 0;
  // const READ_ONLY = 1;
  // const AUTHOR = 2;
  /*
  type Combinable = number | string;
  type ConversionDescriptor = 'as-number' | 'as-text';

  const combine = (
    input1: Combinable,
    input2: Combinable,
    resultType: ConversionDescriptor
  ) => {
    let result;
    if (
      (typeof input1 === 'number' && typeof input2 === 'number') ||
      resultType === 'as-number'
    ) {
      result = +input1 + +input2;
    } else {
      result = input1.toString() + input2.toString();
    }
    return result;
  };

  const combinedAges = combine(30, 20, 'as-number');
  console.log(combinedAges);

  const combinedStringAges = combine('20', '39', 'as-number');
  console.log(combinedStringAges);

  const combinedNames = combine('Sabuhi', 'Teymurov', 'as-text');
  console.log(combinedNames);
  */
  /*
  const add = (n1: number, n2: number) => {
    return n1 + n2;
  };

  const printResult = (num: number): void => {
    // demo
    console.log('Result: ' + num);
  };

  const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
    const result = n1 + n2;
    cb(result);
  };

  printResult(add(5, 12));

  let combineValues: (a: number, b: number) => number;

  combineValues = add;

  console.log(combineValues(9, 9));

  addAndHandle(2, 23, (result) => {
    console.log(result);
  });
  */
  /*
  let person1: unknown;
  const person2 = 'John';

  if (typeof person1 === 'string') {
    person1 = person2;
  }

  enum Role {
    ADMIN = 1,
    READ_ONLY,
    AUTHOR,
  }

  const Person = {
    name: 'Sabuhi',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
  };
  */
  /*
  const generateError = (message: string, code: number): never => {
    throw { message: message, errorCode: code };
  };

  generateError('An unexpected error occured!', 500);
  */
  console.log('Learned the basics!');
};

export default Basics;
