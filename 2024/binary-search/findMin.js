// 153. Find Minimum in Rotated Sorted Array

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        if(nums[l] <= nums[r]){
            return nums[l];
        }
        let mid = parseInt(l + (r - l) / 2);
        if(nums[mid] > nums[l]) {
            l = mid + 1;
        } else if(nums[mid] < nums[l]) {
            r = mid;
        } else {
            break;
        }
    }
    return nums[r];
};