/*
Given an array of integers of any length, 
return an array that has 1 added to the value represented by the array.

If the array is invalid 
(empty, or contains negative integers or integers with more than 1 digit),
return nil (or your language's equivalent).

Examples:
  Valid arrays
    [4, 3, 2, 5] would return [4, 3, 2, 6] (4325 + 1 = 4326)
    [1, 2, 3, 9] would return [1, 2, 4, 0] (1239 + 1 = 1240)
    [9, 9, 9, 9] would return [1, 0, 0, 0, 0] (9999 + 1 = 10000)
    [0, 1, 3, 7] would return [0, 1, 3, 8] (0137 + 1 = 0138)

  Invalid arrays
    [] is invalid because it is empty
    [1, -9] is invalid because -9 is not a non-negative integer
    [1, 2, 33] is invalid because 33 is not a single-digit integer
*/


// Solution

function upArray(arr) {
  if ((typeof arr === 'undefined') || (arr === null) || (arr.length === 0)) {
      return null;
  }

  for (let i = 0; i < arr.length; i++) {
      if ((arr[i] < 0) || (typeof arr[i] !== 'number') || (arr[i] > 9)) {
          return null;
      }
  }
  // if its 9 and more than one digit we have to check all previous digits
  // whether they are also a 9
  for (let j = arr.length - 1; j > -1; j--) {
      if (arr[j] !== 9) {
          arr[j] = arr[j] + 1;
          break;
      } else {
          arr[j] = 0;
      }

      if (j === 0) {
          arr.unshift(1);
      }
  }
  return arr;
}

// or

function upArray(arr){
  if(arr.find((num)=>num>9||num<0)||arr.length===0){return null}
  const arrAsString = arr.join("");
  const keepZeros = arrAsString.match(/^0*/);
  const initialNumber = BigInt(arrAsString);
  const newNumber = initialNumber+BigInt(1);
  const backToString = keepZeros? keepZeros + newNumber.toString():newNumber.toString();
  const result = backToString.split("").map(Number);
  return result
}