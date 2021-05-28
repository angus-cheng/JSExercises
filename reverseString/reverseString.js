const reverseString = function(word) {
    let result = '';
    for (let i = word.length; i != 0; i--) {
        result += word.charAt(i);
    }
    result += word.charAt(0);
    return result;
};

module.exports = reverseString;
