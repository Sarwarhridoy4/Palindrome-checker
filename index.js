function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Compare the cleaned string with its reversed version
  return cleanedStr === cleanedStr.split('').reverse().join('');
}


console.log(isPalindrome("level")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("A man, a plan, a canal: Panama"));