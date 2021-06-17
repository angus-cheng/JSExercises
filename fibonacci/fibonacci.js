const fibonacci = function(num) {
	num = parseInt(num);
	if (num < 1) {return 'OOPS'};
	if (num === 1 || num === 2) return 1;
	return fibonacci(num - 1) + fibonacci(num - 2);
};

module.exports = fibonacci;
