const findTheOldest = function(arr) {
  arr.reduce((previousPerson, currentPerson) => {
    if (!previousPerson.yearOfDeath) {
      previousPerson.yearOfDeath = new Date().getFullYear();
    } else if (!currentPerson.yearOfDeath) {
      currentPerson.yearOfDeath = new Date().getFullYear();
    }

    let currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
    let previousAge = previousPerson.yearOfDeath - previousPerson.yearOfBirth;

    if (previousAge < currentAge) {
      console.log(currentPerson);
    } else {
      console.log(previousPerson);
    }
  })
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]

findTheOldest(people)