const repeatString = function(word, repeats) {
    if (repeats < 0) return 'ERROR';
    let result = '';
    for (let i = 0; i < repeats; i++) result += word;
    return result;
};

module.exports = repeatString;
