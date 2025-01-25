/*
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:
Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Example 2:
Input: jewels = "z", stones = "ZZ"
Output: 0

Constraints:
1 <= jewels.length, stones.length <= 50
jewels and stones consist of only English letters.
All the characters of jewels are unique.
*/

// function numJewelsInStones(jewels: string, stones: string): number {
//   let result = 0;
//   for (const stone of stones) {
//     for (const jewel of jewels) {
//       if (stone === jewel) {
//         result++;
//       }
//     }
//   }
//   return result;
// } // O(n * m)

function numJewelsInStones(jewels: string, stones: string): number {
  const jewelSet = new Set(jewels);
  let result = 0;

  for (const stone of stones) {
    if (jewelSet.has(stone)) {
      result++;
    }
  }

  return result;
} // O(n + m);

numJewelsInStones('aA', 'aAAbbbb'); // 3
numJewelsInStones('z', 'ZZ'); // 0
