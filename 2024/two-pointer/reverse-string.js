//  Write a function that reverse a string. The input string is given as an array of characters char[].
//  Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
// You may assume all the characters consits of printable ascii characters.

// https://www.youtube.com/watch?v=86GHTcY0K4I&list=PLV5qT67glKSErHD66rKTfqerMYz9OaTOs&index=3&ab_channel=%E5%9B%BE%E7%81%B5%E6%98%9F%E7%90%83TuringPlanet
// before 9mins.

function ReversStr(arr) {
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        const tmp = arr[j];
        arr[j] = arr[i];
        arr[i] = tmp;
        i++;
        j--;
    }
    return arr;
}

const TestArr = ['s', 'f', 'u'];
const res = ReversStr(TestArr);
console.log('res', res);
