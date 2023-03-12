const { caesar } = require("../src/caesar");
const { expect } = require("chai");

describe("caesar() test", () => {
  it("should return false if shift amount is 0", () => {
    let actual = caesar("hello", 0, (encode = true));
    let expected = false;
    expect(actual).to.equal(expected);
  });
  it("should return false if shift amount is above 25", () => {
    let actual = caesar("hello", 26, (encode = true));
    let expected = false;
    expect(actual).to.equal(expected);
  });
  it("should return false if shift amount is less than -25", () => {
    let actual = caesar("hello", -26, (encode = true));
    let expected = false;
    expect(actual).to.equal(expected);
  });
});
describe("caesar() test encoding", () => {
  it("should encode a message by shifting the letters", () => {
    let actual = caesar("thinkful", 3, (encode = true));
    let expected = "wklqnixo";
    expect(actual).to.equal(expected);
  });
  it("should leave spaces and other symbols as is", () => {
    let actual = caesar("This is a secret message!", 8, (encode = true));
    let expected = "bpqa qa i amkzmb umaaiom!";
    expect(actual).to.equal(expected);
  });
  it("should ignore capital letters", () => {
    let actual = caesar("Hello", 1, (encode = true));
    let expected = "ifmmp";
    expect(actual).to.equal(expected);
  });
  it("should appropriately handle letters at the end of the alphabet", () => {
    let actual = caesar("zebra", 1, (encode = true));
    let expected = "afcsb";
    expect(actual).to.equal(expected);
  });
  it("should allow for a negative shift that will shift to the left", () => {
    let actual = caesar("thinkful", -3, (encode = true));
    let expected = "qefkhcri";
    expect(actual).to.equal(expected);
  });
});
describe("caesar() test decoding", () => {
  it("should decode a message by shifting the letters in the opposite direction", () => {
    let actual = caesar("qefkhcri", -3, (encode = false));
    let expected = "thinkful";
    expect(actual).to.equal(expected);
  });
  it("should decode and leave spaces and other symbols as is", () => {
    let actual = caesar("bpqa qa i amkzmb umaaiom!", 8, (encode = false));
    let expected = "this is a secret message!";
    expect(actual).to.equal(expected);
  });
  it("should decode and ignore capital letters", () => {
    let actual = caesar("Ifmmp", 1, (encode = false));
    let expected = "hello";
    expect(actual).to.equal(expected);
  });
  it("should decode and appropriately handle letters at the end of alphabet", () => {
    let actual = caesar("afcsb", 1, (encode = false));
    let expected = "zebra";
    expect(actual).to.equal(expected);
  });
  it("should decode and allow for a negative shift that will shift to the left", () => {
    let actual = caesar("ifmmp", -1, (encode = false));
    let expected = "jgnnq";
    expect(actual).to.equal(expected);
  });
});
