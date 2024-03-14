/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let area = 0;
    while (left < right) {
        const hLeft = height[left];
        const hRight = height[right];
        const newArea = Math.min(hLeft, hRight) * (right - left);
        area = Math.max(newArea, area);
        if (hLeft < hRight) {
            left++;
        } else {
            right--;
        }
    }
    return area;
};
