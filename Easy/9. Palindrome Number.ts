/*
Given an integer x, return true if x is a 
palindrome
, and false otherwise.

 

Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:
-231 <= x <= 231 - 1

Follow up: Could you solve it without converting the integer to a string?
*/

// // String Converting
// function isPalindrome(x: number): boolean {
//   if (x < 0) return false;

//   const xStr = x.toString();

//   for (let i = 0; i < Math.floor(xStr.length / 2); i++) {
//     if (xStr[i] !== xStr[xStr.length - i - 1]) {
//       return false;
//     }
//   }

//   return true;
// }

// Without String Converting
function isPalindrome(x: number): boolean {
  if (x < 0) return false;

  let original = x;
  let reversed = 0;

  while (x > 0) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return original === reversed;
}

isPalindrome(121); // true
isPalindrome(-121); // false
isPalindrome(10); // false
isPalindrome(11); // true
isPalindrome(9627269); // true
