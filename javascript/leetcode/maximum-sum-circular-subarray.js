// Given a circular integer array nums of length n, return the maximum possible sum of a non-empty subarray of nums.
// A circular array means the end of the array connects to the beginning of the array. Formally, the next element of 

// nums[i] is nums[(i + 1) % n] and the previous element of nums[i] is nums[(i - 1 + n) % n].
// A subarray may only include each element of the fixed buffer nums at most once. Formally, for a subarray nums[i], 
// nums[i + 1], ..., nums[j], there does not exist i <= k1, k2 <= j with k1 % n == k2 % n.

// Example 1:
// Input: nums = [1,-2,3,-2]
// Output: 3
// Explanation: Subarray [3] has maximum sum 3.
// Example 2:

// Input: nums = [5,-3,5]
// Output: 10
// Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10.
// Example 3:

// Input: nums = [-3,-2,-3]
// Output: -2
// Explanation: Subarray [-2] has maximum sum -2.
function maxSubarraySumCircular(nums) {
	const n = nums.length;
	// Step 1: Standard Kadane's algorithm to find the maximum subarray sum (non-circular)
	let maxCurrent = nums[0]
	let maxGlobal = nums[0];
	for (let i = 1; i < n; i++) {
		maxCurrent = Math.max(nums[i], maxCurrent + nums[i])
		maxGlobal = Math.max(maxGlobal, maxCurrent)
	}

	// If all numbers are negative, maxGlobal contains the maximum (least negative) value.
	if (maxGlobal < 0) {
		return maxGlobal;
	}

	// Step 2: Kadane's algorithm to find the minimum subarray sum
	let minCurrent = nums[0];
	let minGlobal = nums[0]
	for (let i = 1; i < n; i++) {
		minCurrent = Math.min(nums[i], minCurrent + nums[i]);
		minGlobal = Math.min(minGlobal, minCurrent)
	}

	// Step 3: Calculate the total sum of the array
	const totalSum = nums.reduce((acc, num) => acc + num, 0);
	
	// Step 4: Calculate the maximum circular sum by excluding the minimum subarray
	const wrapSum = totalSum - minGlobal;

	// The result is the maximum of non-circular and circular subarray sums
	return Math.max(maxGlobal, wrapSum);
}

console.log(maxSubarraySumCircular([1, -2, 3, -2])); // Output: 3
console.log(maxSubarraySumCircular([5, -3, 5]));    // Output: 10
console.log(maxSubarraySumCircular([-3, -2, -3]));  // Output: -2



















