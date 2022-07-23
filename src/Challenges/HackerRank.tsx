import React from 'react';

const HackerRank = () => {
  // HackerRank Challenges
  /*
  function compareTriplets(a: number[], b: number[]):number[] {
    // Write your code here
    const scores = [0, 0];
    for (let i = 0; i < a.length; i++) {
      if (a[i] > b[i]) scores[0]++;
      else if (a[i] < b[i]) scores[1]++;
    }
    return scores;
  }
  */
  /*
  function birthdayCakeCandles(candles: number[]): number {
    // Write your code here
    let tallest = candles[0];
    candles.forEach((c: number) => {
      if (c > tallest) tallest = c;
    });
    const blowedCandles = candles.filter((c: number) => c === tallest);
    return blowedCandles.length;
  }
  */
  /*
  function aVeryBigSum(ar: number[]):number {
    // Write your code here
    const initialValue = 0;
    return (
      ar.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
      )
    );
  }
  */
  /*
  function diagonalDifference(arr: number[][]):number {
    // Write your code here
    let leftSide = 0;
    let rightSide = 0;
    for (let i = 0; i < arr.length; i++) {
      leftSide += arr[i][i];
    }
    for (let i = 0; i < arr.length; i++) {
      rightSide += arr[i][arr[0].length - (i + 1)];
    }
    return Math.abs(leftSide - rightSide);
  }
  */
  /*
  function plusMinus(arr: number[]): void {
    // Write your code here
    let numberOfP = 0;
    let numberOfN = 0;
    let numberOfZ = 0;
    arr.forEach((n) => {
      if (n > 0) {
        numberOfP++;
      } else if (n === 0) {
        numberOfZ++;
      } else {
        numberOfN++;
      }
    });
    console.log((numberOfP / arr.length).toFixed(6));
    console.log((numberOfN / arr.length).toFixed(6));
    console.log((numberOfZ / arr.length).toFixed(6));
  }
  */
  /*
  function staircase(n: number): void {
    // Write your code here
    let whiteSpace = ' ';
    for (let i = n - 1, a = 1; i > -1 && a < n + 1; i--, a++) {
      if (i === 0) whiteSpace = '';
      console.log(whiteSpace.repeat(i) + '#'.repeat(a));
    }
    console.log('' + '#'.repeat(6));
  }
  */
  /*
  function miniMaxSum(arr: number[]): void {
    // Write your code here
    let max = arr[0];
    let min = arr[0];
    for (let i of arr) {
      if (i < min) min = i;
      if (i > max) max = i;
    }
    const sum = arr.reduce((a, b) => a + b, 0) - arr[0];
    const sumMax = arr
      .filter((n) => n !== min)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    const sumMin = arr
      .filter((n) => n !== max)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    if (min === max) console.log(sum, sum);
    else console.log(sumMin, sumMax);
  }
  */
  /*
  function extraLongFactorials(n: number): void {
    let factorial = BigInt(1);
    for (let i = n; i > 1; i--) {
      factorial *= BigInt(i);
    }
    console.log(factorial.toString());
  }
  */
  /*
  function timeConversion(s: string): string | number | undefined {
    // Write your code here
    if (s.includes('PM')) {
      const hour = s.replace('PM', '');
      return hour.slice(0, 2) === '12'
        ? hour
        : Number(hour.slice(0, 2)) + 12 + hour.slice(2);
    } else {
      const hour = s.replace('AM', '');
      return hour.slice(0, 2) === '12' ? '00' + hour.slice(2) : hour;
    }
  }
  */
  /*
  function gradingStudents(grades: number[]): number[] {
    // Write your code here
    const finalGrades = grades.map((g: number) => {
      if (g < 38) return g;
      else {
        const remainder = 5 - (g % 5);
        if (remainder > 2) return g;
        else return g + remainder;
      }
    });

    return finalGrades;
  }
  */
  /*
  function countApplesAndOranges(
    s: number,
    t: number,
    a: number,
    b: number,
    apples: number[],
    oranges: number[]
  ): void {
    // Write your code here
    let appleScore = 0;
    let orangeScore = 0;
    apples.forEach((cor) => {
      if (a + cor >= s && a + cor <= t) {
        appleScore++;
      }
    });
    oranges.forEach((cor) => {
      if (b + cor >= s && b + cor <= t) {
        orangeScore++;
      }
    });
    console.log(appleScore);
    console.log(orangeScore);
  }
  */
  /*
  function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
    // Write your code here
    if(v1 < v2) return 'NO';
    else if((x2-x1) % (v1-v2)===0)return 'YES';
    return 'NO'
  }
  */
  /*
  const pickingNumbers = (a: number[]): number => {
    let result: number[] = [];

    a.forEach((n) => (result[n] = (result[n] || 0) + 1));

    let max = Number.NEGATIVE_INFINITY;

    result.forEach((n, i) => {
      const finalMax = n + (result[i + 1] || 0);
      if (finalMax > max) max = finalMax;
    });

    return max;
  };
  */

  return <div></div>;
};

export default HackerRank;
