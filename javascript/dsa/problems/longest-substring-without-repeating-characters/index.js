const getLengthSubstring = (s) => {
	const n = s.length;
	let maxLen = 0;
	let left = 0;
	let charset = new Set()

	for(let right = 0; right < n; right++) {
		while(charset.has(s[right])) {
			charset.delete(s[left]);
			left++
		}
		charset.add(s[right]);
		maxLen = Math.max(maxLen, right - left + 1);
	}
	return maxLen;
}

console.log(getLengthSubstring('pwwkew'));