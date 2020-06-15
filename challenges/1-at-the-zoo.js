// 1
function classifyAnimals(animals, type) {
  if (animals.length === 0) return animals;
  return animals.filter((animal) => animal.type === type);
}

// 2
function createZooDisplays(animals) {
  if (animals.length === 0) return animals;
  return animals.map((animal) => {
    return `My name is ${animal.name}, and I am a ${animal.species} and I'm originally from ${animal.nativeRegion}`;
  });
}

// 3
function createAnimalTally(animals) {
  if (animals.length === 0) return {};
  const tally = {};
  for (let i = 0; i < animals.length; i++) {
    if (tally.hasOwnProperty(animals[i])) {
      tally[animals[i]]++;
    } else {
      tally[animals[i]] = 1;
    }
  }
  return tally;
}

// bracket <-- variable
// dot notation

// for loop
// hasOwnProperty to check if property has already been assigned
// if yes -> count up by 1
// if no -> start count

module.exports = { classifyAnimals, createZooDisplays, createAnimalTally };
