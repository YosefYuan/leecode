/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        let mid = parseInt(l + (r - l) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[l] === target) {
            return l;
        } else if (nums[r] === target) {
            return r;
        } else if(nums[l] < nums[r]) {
            // no rorated
            if(nums[l] > target && nums[r] < target) {
                return -1;
            } else if (nums[mid] > target) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        } else {
            // rorated
            if (nums[l] < target) {
                if (target < nums[mid]) {
                    r = mid - 1;
                } else {
                    if(nums[mid] > nums[l]) {
                        l = mid + 1;
                    } else {
                        r = mid - 1;
                    }
                }
            } else if (nums[r] > target) {
                if (target < nums[mid]) {
                    if(nums[mid] < nums[r]) {
                        r = mid - 1;
                    } else {
                        l = mid + 1;
                    }
                } else {
                    l = mid + 1;
                }
            } else {
                return -1;
            } 
        }
    }
    return -1;
};