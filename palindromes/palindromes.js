/*const palindromes = function (phrase) {
	phrase = phrase.toLowerCase();
	let chars = phrase.split('');
	charsNoPunc = chars.filter((char => (/[a-zA-Z]/).test(char)));
	let reverse = [];
	for (let i = 0; i < charsNoPunc.length; i++) {
		reverse.push(chars[charsNoPunc.length - i - 1]);
	}
	console.log(reverse);

	for (let i = 0; i < charsNoPunc.length; i++) {
		if (!(reverse[i] === charsNoPunc[i])) return false;
	}

	return true;
};
*/
const palindromes = function(phrase) {
	phrase = phrase.toLowerCase();
	phrase = phrase.split('');
	phrase = phrase.filter(char => (/[a-zA-Z]/.test(char)));
	let reverse = phrase.slice().reverse();
	
	return reverse.every(reverseLetter => reverseLetter === phrase.shift());
}

module.exports = palindromes;
