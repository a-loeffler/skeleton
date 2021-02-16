/******************************************************************************
Write a function reverseString(string) that takes in a hyphenated string and
returns a the hyphenated string reversed.

Examples:

reverseString("Go-to-the-store") => "store-the-to-Go"
reverseString("Jump,-jump-for-joy") => "joy-for-jump-Jump,"
*******************************************************************************/

function reverseString(string) {
  // your code here...
  let splitStringArray = string.split("-");
  let newArray = [];
  let reversedString = "";

  for (let i = splitStringArray.length - 1; i >= 0; i--) {
    let newWord = splitStringArray[i];
    newArray.push(newWord);
  }
  reversedString = newArray.join("-");
  return reversedString;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseString;
