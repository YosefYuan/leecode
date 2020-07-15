function calSquareRoot(num) {
    if(isNaN(num) || num < 0) {
        console.log('入参无平方跟');
        return false;
    };
    if(num === 0 || num === 1) return num;
    function findBetweeneMinAndMax(num, min, max) {
        let middle = parseInt((min + max) * 1000000) / 2 / 1000000;
        if((middle + 0.000001) * (middle + 0.000001) > num && (middle - 0.000001) * (middle - 0.000001) < num) {
            return middle;
        } else if((middle * middle) > num) {
            max = middle;
            return findBetweeneMinAndMax(num, min, max);
        } else {
            min = middle;
            return findBetweeneMinAndMax(num, min, max);
        }
    }
    let min;
    let max;
    if(num < 1) {
        min = 0;
        max = 1;
    } else {
        min = 1;
        max = num;
    }
    return findBetweeneMinAndMax(num, min, max);
}

const squareRoot = calSquareRoot(0.81);
console.log('squareRoot', squareRoot);