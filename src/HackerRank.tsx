import React from 'react';

const HackerRank = () => {
  /*
  function compareTriplets(a: number[], b: number[]) {
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
  function aVeryBigSum(ar: number[]) {
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
  function diagonalDifference(arr: number[][]) {
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

  return <div>hackerRank</div>;
};

export default HackerRank;
