const { expect } = require("chai");
const {
  classifyAnimals,
  createZooDisplays,
  createAnimalTally,
} = require("../challenges/1-at-the-zoo");
const ncArk = require("../data/challenge-1-data");

describe("classifyAnimals", () => {
  it("returns an empty array when passed an empty array", () => {
    const animals = [];
    const actual = classifyAnimals(animals);
    const expected = [];
    expect(actual).to.eql(expected);
  });
  it("when passed a mixed array and a type returns only the animals of that type", () => {
    const animals = [
      { name: "koala bear", type: "mammal" },
      { name: "python", type: "reptile" },
    ];
    const actual = classifyAnimals(animals, "mammal");
    const expected = [{ name: "koala bear", type: "mammal" }];
    expect(actual).to.eql(expected);
  });
  it("when passed an array of animals and a type, where none are the type returns an empty array", () => {
    const animals = [
      { name: "koala bear", type: "mammal" },
      { name: "python", type: "reptile" },
      { name: "otter", type: "mammal" },
      { name: "eagle", type: "bird" },
    ];
    const actual = classifyAnimals(animals, "vertabrate");
    const expected = [];
    expect(actual).to.eql(expected);
  });
});

describe("createZooDisplays", () => {
  it("when passed an empty array returns an empty array", () => {
    const animals = [];
    const actual = createZooDisplays(animals);
    const expected = [];
    expect(actual).to.eql(expected);
  });
  it("when passed an array with one animal object creates a display tag that includes name, species and country of origin", () => {
    const animals = [
      {
        name: "Montgomery",
        species: "Southern African meerkat",
        nativeRegion: "Botswana",
      },
    ];
    const actual = createZooDisplays(animals);
    const expected = [
      "My name is Montgomery, and I am a Southern African meerkat and I'm originally from Botswana",
    ];
    expect(actual).to.eql(expected);
  });
  it("when passed multiple animal objects returns display tag for each", () => {
    const animals = [
      {
        name: "Montgomery",
        species: "Southern African meerkat",
        nativeRegion: "Botswana",
      },
      {
        name: "Salome",
        species: "Rattlesnake",
        nativeRegion: "Argentina",
      },
    ];
    const actual = createZooDisplays(animals);
    const expected = [
      "My name is Montgomery, and I am a Southern African meerkat and I'm originally from Botswana",
      "My name is Salome, and I am a Rattlesnake and I'm originally from Argentina",
    ];
    expect(actual).to.eql(expected);
  });
});

describe("createAnimalTally", () => {
  it("when passed an empty array, returns an empty object", () => {
    const animals = [];
    const actual = createAnimalTally(animals);
    const expected = {};
    expect(actual).to.eql(expected);
  });
  it("when passed array with one animal, returns an object tally for that one", () => {
    const animals = ["tiger"];
    const actual = createAnimalTally(animals);
    const expected = { tiger: 1 };
    expect(actual).to.eql(expected);
  });
  it("when passed an array of multiple animals, returns an object tally for those animals", () => {
    const animals = ["tiger", "octopus"];
    const actual = createAnimalTally(animals);
    const expected = { tiger: 1, octopus: 1 };
    expect(actual).to.eql(expected);
  });
  it("when passed array of multiple animals, some being duplicates, returns a tally for those animals", () => {
    const animals = ["tiger", "tiger", "octopus"];
    const actual = createAnimalTally(animals);
    const expected = { tiger: 2, octopus: 1 };
    expect(actual).to.eql(expected);
  });
  it("works for large data set", () => {
    const actual = createAnimalTally(ncArk);
    const expected = {
      platypus: 69,
      lion: 85,
      seal: 80,
      eagle: 74,
      elephant: 67,
      parrot: 83,
      chimp: 106,
      snake: 83,
      tiger: 71,
      koala: 82,
    };
    expect(actual).to.eql(expected);
  });
});

// tiger tiger
// tiger leopard
