function firstNonRepeatedChar(str) {
  if (!str) return null; // handle empty string

  const freq = {};

  // Count frequency of each character
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Find the first character with frequency 1
  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }

  return null; // if no non-repeated character
}

// ✅ Test Cases
console.log(firstNonRepeatedChar('aabbcdd')); // 'c'
console.log(firstNonRepeatedChar('aabbcc'));  // null
console.log(firstNonRepeatedChar('abc'));     // 'a'
console.log(firstNonRepeatedChar(''));        // null

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
