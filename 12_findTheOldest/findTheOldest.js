const findTheOldest = (people) =>
  people.reduce((oldest, person) => {
    const getAge = (p) =>
      (p.yearOfDeath || new Date().getFullYear()) - p.yearOfBirth;
    return getAge(person) > getAge(oldest) ? person : oldest;
  });

// Do not edit below this line
module.exports = findTheOldest;
