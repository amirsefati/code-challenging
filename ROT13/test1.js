const chai = require("chai");
const assert = chai.assert;

describe("Tests", function () {
  it("Tests sentences", function () {
    for (const [input, expected] of [
      ["test", "grfg"],
      ["Test", "Grfg"],
    ]) {
      assert.strictEqual(
        rot13(input),
        expected,
        `Test failed with messsage = '${input}'`
      );
    }
  });
});
