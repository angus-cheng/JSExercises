/*
const getTheTitles = function(books) {
	book2 = books.pop();
	book1 = books.pop();
	return [book1['title'], book2['title']];
};
*/
const getTheTitles = function(books) {
	const bookTitles = [];
	books.map(book => {bookTitles.push(book['title'])});
	return bookTitles;
}

module.exports = getTheTitles;
