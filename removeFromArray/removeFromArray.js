const removeFromArray = function(arr, ...removes) {
    for (let val of removes) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === val) {
                arr.splice(i, 1);
                break;
            }
        }
    }
    console.log(arr);
    return arr;
};

module.exports = removeFromArray;
