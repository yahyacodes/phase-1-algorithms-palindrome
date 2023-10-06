function reverseString(word) {
  const wordArray = word.split("");
  const reversedWordArray = wordArray.reverse();
  const reversedWord = reversedWordArray.join("");
  return reversedWord;
}

function isPalindrome(word) {
  // Write your algorithm here
  const reversedString = reverseString(word);
  if (word === reversedString) {
    return true;
  } else {
    return false;
  }
}
/* 
  Add your pseudocode here

  ::Pseudocode
  reverse the input string
  if the reversed string is the same as the input
  return true
  else 
  return false
*/

/*
  Add written explanation of your solution here;

  I should write function isPalindrome that returns true or false if the 
  input string is the same when read forwards and backwards.
  If the word reads backwards and forwards I should return true, ie; 'mom',
  'racecar'. I should return false if the word cannot read forwards and backwards.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  // console.log("Expecting: true");
  // console.log("=>", isPalindrome("abba"));
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
