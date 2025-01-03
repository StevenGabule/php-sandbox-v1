export function hash(key, bucketsNumber) {
	let hashCode = 0;
	for(let characterIndex = 0; characterIndex < key.length; characterIndex += 1) {
		hashCode += key.charCodeAt(characterIndex);
	}

	return hashCode % bucketsNumber;
}

console.log(hash('ab', 100))