const Generics = () => {
  /*
  // Generics
  const names: Array<string> = ['Max', 'Manuel'];
  // names[0].split(' ');

  const promise: Promise<string> = new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve('This is done!');
    }, 2000);
  })

  promise.then((r)=> r.split(' '));
  */
  /*
  // Generic functions & constraints
  const merge = <T extends object, U extends object>(objA: T, objB: U) => {
    return Object.assign(objA, objB);
  };
  const mergedObj = merge({ name: 'Sabuhi' }, { age: 21 });
  // console.log(mergedObj.age);

  interface Lengthy{
    length: number;
  }

  const countAndPrint = <T extends Lengthy>(element: T): [T, string] => {
    const countAndDescribe =
      element.length > 0 ? `Got ${element.length} elements.` : 'Got no value.';
    return [element, countAndDescribe];
  };
  console.log(countAndPrint([23, 523, 21]));
  */
  return 'ON PAUSE';
};

export default Generics;
