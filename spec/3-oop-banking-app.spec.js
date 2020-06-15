const { expect } = require("chai");
const User = require("../challenges/3-oop-banking-app");

describe("User", () => {
  describe("Properties", () => {
    it("returns a new User instance with a currentBalance property set to a default of 0", () => {
      const testUser = new User();
      expect(testUser.currentBalance).to.equal(0);
    });
    it("returns a new User instance with a pots property which is set to an empty object", () => {
      const testUser = new User();
      expect(testUser.pots).to.eql({});
    });
  });
  describe("User", () => {
    describe("Methods", () => {
      it("returns a new User instance with a despositMoney method which updates the current balance in pounds", () => {
        const testUser = new User();
        testUser.depositMoney(1.5);
        testUser.depositMoney(1.25);
        expect(testUser.currentBalance).to.eql(2.75);
      });
      it("returns a new User instance with a createNewPot method that takes the key of the pot as an argument and puts that into the pot", () => {
        const testUser = new User();
        testUser.createNewPot("holiday");
        expect(testUser.pots.holiday).to.eql({ potBalance: 0 });
      });
      it("returns an new User instance with an addToPot method which will add money to the potBalance of a given pot", () => {
        const testUser = new User();
        testUser.addToPot("holiday", 10);
        expect(testUser.pots.holiday).to.eql({ potBalance: 10 });
      });
      it("returns a new User instance with a transferToPot method which will transfer money from the currentBalance to the potBalance. A user without sufficient funds wont be affected", () => {
        const testUser = new User();
        testUser.currentBalance = 10;
        testUser.transferToPot("holiday", 5.15);
        expect(testUser.currentBalance).to.eql(4.85);
        expect(testUser.pots.holiday).to.eql({ potBalance: 5.15 });
      });
    });
  });
});
