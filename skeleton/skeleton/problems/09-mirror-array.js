/***********************************************************************
Write a function `mirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples:

Examples:

mirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
mirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/

function mirrorArray(array) {
  // your code here...
  let newArray = array;
  for (let i = array.length-1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = mirrorArray;
