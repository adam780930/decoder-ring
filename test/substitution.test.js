const { substitution } = require("../src/substitution");
const { expect } = require("chai");

describe("substitution() submission tests", () => {
  describe("error handling", () => {
    it("should return false if the substitution alphabet is missing", () => {
      const actual = substitution("thinkful");
      const expected = false;
      expect(actual).to.equal(expected);
    });

    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
      const actual = substitution("message", "short");
      const expected = false;
      expect(actual).to.equal(expected);
    });

    it("should return false if the substitution alphabet does not contain unique characters", () => {
      const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
      const expected = false;
      expect(actual).to.equal(expected);
    });
  });

  describe("encoding a message", () => {
    it("should encode a message by using the given substitution alphabet", () => {
      const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
      const expected = "jrufscpw";
      expect(actual).to.equal(expected);
    });

    it("should work with any kind of key with unique characters", () => {
      const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
      const expected = "y&ii$r&";
      expect(actual).to.equal(expected);
    });

    it("should preserve spaces", () => {
      const actual = substitution("my message", "$wae&zrdxtfcygvuhbijnokmpl");
      const expected = "yp y&ii$r&";
      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by using the given substitution alphabet", () => {
      const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
      const expected = "thinkful";
      expect(actual).to.equal(expected);
    });

    it("should work with any kind of key with unique characters", () => {
      const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
      const expected = "message";
      expect(actual).to.equal(expected);
    });

    it("should preserve spaces", () => {
      const actual = substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false);
      const expected = "you are an excellent spy";
      expect(actual).to.equal(expected);
    });
  });
});
