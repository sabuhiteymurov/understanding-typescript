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
};

export default Basics;
