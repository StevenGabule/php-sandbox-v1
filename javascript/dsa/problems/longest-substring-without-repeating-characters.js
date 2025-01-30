

var lengthOfLongestSubstring = function (s) {
	const hm = {};
	const str = s.split('');
	for(let i = 0; i < str.length; i++) {
		if(!(str[i] in hm)) {
			hm[str[i]] = str[i]
		}
	}
	return Object.values(hm).join('').length;
};

// console.log(lengthOfLongestSubstring("abcabcbb"))
// console.log(lengthOfLongestSubstring("bbbbb"))
// console.log(lengthOfLongestSubstring("pwwkew"))

function lengthOfLongestSubstring(s) {
	let n = s.length;
	let maxLen = 0;
	let left = 0;
	let charSet = new Set();

	for (let right = 0; right < n; right++) {
			// If the character is already in the set, remove characters from the left
			while (charSet.has(s[right])) {
					charSet.delete(s[left]);
					left++;
			}

			// Add the current character to the set
			charSet.add(s[right]);

			// Update the maximum length if needed
			maxLen = Math.max(maxLen, right - left + 1);
	}

	return maxLen;
}

// Example usage:
const s = "pwwkew";
const result = lengthOfLongestSubstring(s);
console.log(result); // Output: 3
