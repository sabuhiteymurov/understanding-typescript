const Basics = () => {
  const Person = {
    name: 'Sabuhi',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
  };

  let schoolItems: string[];
  schoolItems = ['Pencil', 'A4'];

  Person.hobbies.forEach((hobby) => console.log(hobby));

  console.log('Learning the basics');
};

export default Basics;
