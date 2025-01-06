/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:
1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/

// V1
// function longestCommonPrefix(strs: string[]): string {
//   if (strs.length === 0) return '';

//   let result = '';

//   for (let i = 0; i < strs[0].length; i++) {
//     const char = strs[0][i];

//     for (const el of strs) {
//       if (i >= el.length || el[i] !== char) {
//         return result;
//       }
//     }
//     result += char;
//   }

//   return result;
// }

// V2
function longestCommonPrefix(strs: string[]): string {
  if (!strs.length) return '';

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== char) {
        return strs[0].slice(0, i);
      }
    }
  }

  return strs[0];
}

longestCommonPrefix(['flower', 'flow', 'flight']); // "fl"
longestCommonPrefix(['dog', 'racecar', 'car']); // ""
