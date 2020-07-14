/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    const map = {
        "0": 0,
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9
    };

    function stringToNum(strNum) {
        const caches = strNum.split("").reverse();
        let num = 0;
        caches.forEach((val, index) => {
            num += map[val] * Math.pow(10, index)
        })
        return num;
    }
    return stringToNum(num1) * stringToNum(num2);
};
multiply('123', '456');