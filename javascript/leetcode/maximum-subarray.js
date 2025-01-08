// Given an integer array nums, find the subarray with the largest sum, and return its sum.
// Example 1:
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Example 2:
// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.

// Example 3:
// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
// const nums = [5, 4, -1, 7, 8]; // 23
function maximumSubArray(nums) { // Brute Force Solution
	let maxSum = nums[0];

	for(let L = 0; L < nums.length; L++) {
		let curSum = 0;
		for(let R = L; R < nums.length; R++) {
			curSum += nums[R];
			maxSum = Math.max(maxSum, curSum);
		}
	}

	return maxSum;
}

// Kadane's Algorithm: O(n)
function kadanes(nums) {
	let maxSum = nums[0];
	let curSum = 0;

	for(let n of nums) {
		curSum = Math.max(curSum, 0);
		curSum += n;
		maxSum = Math.max(maxSum, curSum)
	}

	return maxSum;
}

// Return the left and right index of the max subarray sum,
// assuming there's exactly one result (no ties).
// Sliding window variation of Kadane's: O(n)
function slidingWindow(nums) {
	let maxSum = nums[0];
	let curSum = 0;
	let maxL = 0, maxR = 0;
	let L = 0;

	for(let R = 0; R < nums.length; R++) {
		if(curSum < 0) {
			curSum = 0;
			L = R;
		}
		curSum += nums[R];
		if(curSum > maxSum) {
			maxSum = curSum;
			maxL = L;
			maxR = R;
		}
	}
	return [maxL, maxR];
}

const nums0 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // 6
const nums1 = [1]; // 1
const nums2 = [5, 4, -1, 7, 8]; // 23

// console.log(maximumSubArray(nums0));
// console.log(maximumSubArray(nums1));
// console.log(maximumSubArray(nums2));

// console.log(kadanes(nums0));
// console.log(kadanes(nums1));
// console.log(kadanes(nums2));

// console.log(slidingWindow(nums0));
// console.log(slidingWindow(nums1));
// console.log(slidingWindow(nums2));