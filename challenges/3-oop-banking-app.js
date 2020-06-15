class User {
  constructor() {
    this.currentBalance = 0;
    this.pots = {};
  }
  depositMoney(deposit) {
    this.currentBalance += deposit;
  }
  createNewPot(goal) {
    this.pots[goal] = { potBalance: 0 };
  }
  addToPot(thePot, money) {
    this.pots[thePot] = { potBalance: money };
  }
  transferToPot(whichPot, amount) {
    if (this.currentBalance > amount) {
      this.pots[whichPot] = { potBalance: +amount };
      this.currentBalance -= amount;
    }
  }
}
module.exports = User;
