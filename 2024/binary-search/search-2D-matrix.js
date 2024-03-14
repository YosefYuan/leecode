/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const height = matrix.length;
    const width = matrix[0].length;
    let startY = 0, endY = height - 1;
    while(startY <= endY) {
        const midY = parseInt(startY + (endY - startY) / 2);
        let min = matrix[midY][0];
        let max = matrix[midY][width - 1];
        if(target === min || target === max) {
            return true;
        } else if(target < min){
            endY = midY - 1;
        } else if(target > max) {
            startY = midY + 1;
        } else if( target > min && target < max) {
            const curArr = matrix[midY];
            let minX = 0, maxX = width - 1;
            while (minX <= maxX) {
                const midX = parseInt(minX + (maxX - minX) / 2);
                if (target === curArr[midX]) {
                    return true;
                } else if (target > curArr[midX]) {
                    minX = midX + 1;
                } else {
                    maxX = midX - 1;
                }
            }
            return false;
        }
    }
    return false;
};