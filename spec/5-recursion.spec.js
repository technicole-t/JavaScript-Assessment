const { expect } = require("chai");
const { deepKeys, flat, deepRoute } = require("../challenges/5-recursion");

describe("deepKeys", () => {
  it("returns an empty array when passed an emoty object", () => {
    const actual = deepKeys({});
    const expected = [];
    expect(actual).to.eql(expected);
  });
  it("when passed an object with one key value pair returns an array containing its key", () => {
    const actual = deepKeys({ a: 1 });
    const expected = ["a"];
    expect(actual).to.eql(expected);
  });
  it("when passed an un-nested object with multiple key value pairs returns an array of the keys", () => {
    const actual = deepKeys({ a: 1, b: 2, c: 3 });
    const expected = ["a", "b", "c"];
    expect(actual).to.eql(expected);
  });
  it("when passed an object with one level of nesting returns an array of the keys in all objects", () => {
    const actual = { a: 1, b: 2, c: { d: 10 } };
    const expected = ["a", "b", "c", "d"];
    expect(actual).to.eql(expected);
  });
});

describe("deepRoute", () => {});
describe("flat", () => {});
