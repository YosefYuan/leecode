/**
 * A peak element is an element that is strictly greater then its neighbors.
 * Given a 0-indexed integer array nums, find a peak elemnt, and return its index. If the array contains multiple peaks, return the index to any of the peaks.
 * You may imagine that num[-1] === nums[n] = Negative infinity. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.
 * You must write an algorithm that runs in O(log n) time.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    const len = nums.length;
    let l = 0, r = len - 1;
    while (l <= r) {
        if(l === r) {
            return l;
        }
        if(l + 1 === r) {
            return nums[l] > nums[r] ? l : r;
        }
        let mid = parseInt(l + (r - l) / 2);
        if((nums[mid] > nums[mid - 1]) && (nums[mid] > nums[mid + 1])) {
            return mid;
        } else if (nums[mid] > nums[mid - 1] && nums[mid] < nums[mid + 1]) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return l;
};