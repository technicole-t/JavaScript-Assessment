const { expect } = require("chai");
const getSong = require("../challenges/4-get-song");

describe("getSong()", () => {
  it("invokes callback with empty string when passed an empty string", done => {
    getSong("", (err, delivery) => {
      expect(delivery).to.eql("");
      done();
    });
  });
  it("invokes callback with a message informing the user the file has been downloaded and saved in the correct format", done => {
    getSong("Pyramid Song", (err, message) => {
      expect(message).to.equal(`Successfully saved the file Pyramid Song.mp3`);
      done();
    });
  }).timeout(5000);
});
