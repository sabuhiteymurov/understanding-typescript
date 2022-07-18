const CodeWars = () => {
  // Complementary DNA
  class Kata {
    static dnaStrand(dna: string) {
      //your code here
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
  }
  console.log(Kata.dnaStrand('CGAT'));
};

export default CodeWars;
