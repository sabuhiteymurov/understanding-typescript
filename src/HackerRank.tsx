import React from 'react';

const HackerRank = () => {
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

  return <div>hackerRank</div>;
};

export default HackerRank;
