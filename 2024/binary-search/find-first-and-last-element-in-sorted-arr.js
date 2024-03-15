/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    return [findLeft(nums, target), findRight(nums, target)];
};


function findLeft(nums, target) {
    if(target < nums[0]) return -1;
    let l = 0, r = nums.length - 1;
    while(l < r - 1) {
        let mid = parseInt(l + (r - l) / 2);
        if(nums[mid] === target) {
            r = mid;
        } else if (nums[mid] > target) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    if(nums[l] === target) {
        return l;
    } else if(nums[r] === target) {
        return r;
    } else {
        return -1;
    }
};

function findRight(nums, target) {
    if(target > nums[nums.length - 1]) return -1;
    let l = 0, r = nums.length - 1;
    while(l < r - 1) {
        let mid = parseInt(l + (r - l) / 2);
        if(nums[mid] === target) {
            l = mid;
        } else if(nums[mid] > target) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    if(nums[r] === target) {
        return r;
    } else if(nums[l] === target) {
        return l;
    } else {
        return -1;
    }
};
