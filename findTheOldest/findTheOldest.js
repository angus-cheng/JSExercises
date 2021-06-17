const findTheOldest = function(people) {
	/*
	people.sort((firstPerson, secondPerson) => {
		return firstPerson.yearOfBirth - secondPerson.yearOfBirth;
	});
	console.log(people);

	return people[people.length-1];
	*/

	const age = people.map(person => 
		person.yearOfDeath - person.yearOfBirth
	);
	for (let i = 0; i < age.length; i++) {
		people[i].age = age[i];
	}
	people.sort((firstPerson, secondPerson) => {
		return firstPerson.age - secondPerson.age});

	return people[people.length - 1];
};

module.exports = findTheOldest;
