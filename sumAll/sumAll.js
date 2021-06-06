const sumAll = function(startNum, endNum) {
    if (typeof(startNum) != 'number' || typeof(endNum) != 'number') return 'ERROR';
    if (startNum < 0 || endNum < 0) return 'ERROR';
    if (isNaN(startNum) || isNaN(endNum)) return 'ERROR';
    if (startNum > endNum) {
        let temp = startNum
        startNum = endNum;
        endNum = temp;
    }
    let result = 0;
    for (startNum; startNum <= endNum ; startNum++) {
        result += startNum;
    }

    return result;
};

module.exports = sumAll;
