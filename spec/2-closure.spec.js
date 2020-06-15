const { expect } = require("chai");
const {
  generateMultiples,
  secureFunc,
  rememberMe
} = require("../challenges/2-closure");
const sinon = require("sinon");

describe("generateMultiples()", () => {
  it("will return a new function", () => {
    const createMultiplesOf5 = generateMultiples();
    expect(createMultiplesOf5).to.be.a("function");
  });
  it("new function returns no multiples when passed 0", () => {
    const createMultiplesOf5 = generateMultiples(0);
    expect(createMultiplesOf5(0)).to.eql([]);
  });
  it("new function can return single multiple for input = 1", () => {
    const createMultiplesOf5 = generateMultiples(5);
    expect(createMultiplesOf5(1)).to.eql([5]);
    const createMultiplesOf7 = generateMultiples(7);
    expect(createMultiplesOf7(1)).to.eql([7]);
  });
  it("new function can generate more than 1 multiple for inputs greater than 1", () => {
    const createMultiplesOf5 = generateMultiples(5);
    expect(createMultiplesOf5(2)).to.eql([5, 10]);
    expect(createMultiplesOf5(3)).to.eql([5, 10, 15]);
    expect(createMultiplesOf5(6)).to.eql([5, 10, 15, 20, 25, 30]);
    const createMultiplesOf7 = generateMultiples(7);
    expect(createMultiplesOf7(4)).to.eql([7, 14, 21, 28]);
  });
});

describe("secureFunc()", () => {
  it("returns a new function", () => {
    const securedFunc = secureFunc();
    expect(securedFunc).to.be.a("function");
  });
  it("new function returns an error message when password is incorrect", () => {
    const printSecret = () => {
      return "I love raw garlic";
    };
    const securedPrintSecret = secureFunc("Ilovevegans123!", printSecret);
    expect(securedPrintSecret("Wrong password!")).to.equal(
      `Sorry your password is incorrect!`
    );
  });
  it("new function will return a call to the original function when password is correct", () => {
    const printSecret = () => {
      return "I love raw garlic!";
    };
    const securedPrintSecret = secureFunc("Ilovevegans123!", printSecret);
    expect(securedPrintSecret("Ilovevegans123!")).to.equal(
      "I love raw garlic!"
    );
  });
  it("new function can pass arguments to the original function", () => {
    const sum = (a, b) => a + b;
    const securedSum = secureFunc("Ilovevegans123!", sum);
    expect(securedSum("Ilovevegans123!", 10, 3)).to.equal(13);
  });
});

describe("rememberMe", () => {
  it("returns a new function", () => {
    expect(rememberMe()).to.be.a("function");
  });
  it("maintains the functionality of the input function when no args are passed", () => {
    const returnTwo = () => 2;
    const rememberReturnTwo = rememberMe(returnTwo);
    expect(rememberReturnTwo()).to.equal(2);
  });
  it("maintain the functionality of the input function with args", () => {
    const addNums = (a, b, c, d, e) => a + b + c + d + e;
    const rememberAddNums = rememberMe(addNums);
    expect(rememberAddNums(1, 2, 3, 4, 5)).to.equal(15);
  });
  it("only calls the function once per unique set of arguments", () => {
    const addNums = (a, b, c, d, e) => a + b + c + d + e;
    const spiedAdder = sinon.spy(addNums);
    const rememberSpiedAdder = rememberMe(spiedAdder);
    expect(rememberSpiedAdder(1, 2, 3, 4, 5)).to.equal(15);
    expect(rememberSpiedAdder(1, 2, 3, 4, 5)).to.equal(15);
    expect(spiedAdder.callCount).to.equal(1);
    expect(rememberSpiedAdder(1, 2, 3, 4, 6)).to.equal(16);
    expect(rememberSpiedAdder(1, 2, 3, 4, 6)).to.equal(16);
    expect(spiedAdder.callCount).to.equal(2);
  });
});
