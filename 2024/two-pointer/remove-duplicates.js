// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// https://www.youtube.com/watch?v=86GHTcY0K4I&list=PLV5qT67glKSErHD66rKTfqerMYz9OaTOs&index=3&ab_channel=%E5%9B%BE%E7%81%B5%E6%98%9F%E7%90%83TuringPlanet
// 11mins

function RemoveDuplicatesInSortedArr(arr) {
    let i = 0;
    let j = 0;
    while(j < arr.length) {
        if(arr[i] === arr[j]) {
            j++;
        } else {
            i++;
            arr[i] = arr[j];
            j++;
        }
    }
    return arr.splice(0, i+1);
}

const testArr = [1, 1, 2, 4, 4, 4, 77, 78, 78];
const res = RemoveDuplicatesInSortedArr(testArr);
console.log('res', res);
