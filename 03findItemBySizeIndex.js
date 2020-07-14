/**
 *
 * @param {*} sizeIndex 从小到大的顺序
 * @param {*} arr 源数组
 */
function findItemBySizeIndex(sizeIndex, arr) {
    if (sizeIndex > arr.length) {
        console.log('数组数量不够，不存在这样的数');
        return false;
    }
    arrRight = [...arr];
    const arrLeft = [];
    const refVal = arrRight.splice(0,1)[0];
    let i = 0;
    while (i < arrRight.length) {
        const item = arrRight[i];
        if (item < refVal) {
            arrLeft.push(arrRight.splice(i, 1)[0]);
        } else {
            i += 1;
        }
    }
    if(sizeIndex === arrLeft.length + 1) {
        console.log(`从小到大，排名第${k}的元素是${refVal}`);
        return refVal;
    } else if(sizeIndex <= arrLeft.length) {
        return findItemBySizeIndex(sizeIndex, arrLeft);
    } else {
        return findItemBySizeIndex((sizeIndex - 1 - arrLeft.length), arrRight);
    }
}

const k = 6;
const arr = [35,4,6,44,3,84,56,345,467];
findItemBySizeIndex(k, arr);