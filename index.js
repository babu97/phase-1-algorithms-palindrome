function isPalindrome(word) {
  // Write your algorithm here

  let left  = 0
  let right = word.length- 1
 while (left<right){

   if(word[left] !== word[right]){
    return false;
   }
   left ++;
   right --;
}
return true;
}
isPalindrome('word')

/* 
variable left  = 0 
variable right= last element of word

while left <right
 
if word.left != word.right
 return false

 right --
 left ++

*/

/*
  Add written explanation of your solution here
    obtain the first and last char in the word and store them in the variable
  loop through the word comparing the first char and the last char
  check if the first character and the last character is the same
  return flase if not the same
  otherwise continuing itterating the remaining chars from left and right until it reaches the middle
  return true if found 
  otherwise exit

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
