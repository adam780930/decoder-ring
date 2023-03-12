const { polybius } = require("../src/polybius");
const { expect } = require("chai");

describe("polybius() test", () => {
  describe("encoding a message", () => {
    it("should encode a message by translating each letter to number pairs", () => {
      const message = "message";
      const actual = polybius(message);
      const expected = "23513434112251";

      expect(actual).to.equal(expected);
    });

    it("should translate both 'i' and 'j' to 42", () => {
      const message = "justine";
      const actual = polybius(message);
      const expected = "42543444423351";

      expect(actual).to.equal(expected);
    });

    it("should leave spaces as is", () => {
      const message = "boba milktea";
      const actual = polybius(message);
      const expected = "21432111 23421352445111";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by translating each pair of numbers into a letter", () => {
      const message = "345131245144";
      const actual = polybius(message, false);
      const expected = "secret";

      expect(actual).to.equal(expected);
    });

    it("should translate 42 to both 'i' and 'j'", () => {
      const message = "42543444423351";
      const actual = polybius(message, false);
      const expected = "i/justi/jne";

      expect(actual).to.equal(expected);
    });

    it("should leave spaces as is", () => {
      const message = "21432111 23421352445111";
      const actual = polybius(message, false);
      const expected = "boba mi/jlktea";

      expect(actual).to.equal(expected);
    });

    it("should return false if the length of all numbers is odd", () => {
      const message = "21432111 2342135244511";
      const actual = polybius(message, false);
      const expected = false;

      expect(actual).to.equal(expected);
    });
  });
});