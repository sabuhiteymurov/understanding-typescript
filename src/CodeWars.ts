const CodeWars = () => {
  class Kata {
    /*
    static dnaStrand(dna: string) {
      // Complementary DNA
      return dna
        .split('')
        .map((letter) => {
          if (letter === 'G' || letter === 'C')
            return letter === 'C' ? 'G' : 'C';
          if (letter === 'A' || letter === 'T')
            return letter === 'A' ? 'T' : 'A';
          return;
        })
        .join('');   
    }
    */
    /*
    // Highest and Lowest
    static highAndLow(numbers: string): string {
      const numbersArray = numbers.split(' ');
      let highest = Number(numbersArray[0]);
      let lowest = Number(numbersArray[0]);
      numbersArray.forEach((n) => {
        let number = Number(n);
        if (number > highest) highest = number;
        if (number < lowest) lowest = number;
      });
      return `${highest.toString()} ${lowest.toString()}`;
    }
    */
  }
};

const SeriesSum = (n: number): string => {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += 1 / (1 + 3 * i);
  }

  return sum.toFixed(2);
};

export default CodeWars;
