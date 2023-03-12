// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {
    // conditions for the function to be false, making sure that alphabet is 26 character with unique characters
    if (
      !alphabet ||
      alphabet.length > 26 ||
      alphabet.length < 26 ||
      /(\w).*\1/i.test(alphabet)
    ) {
      return false;
    }

    // changing all user input alphabets to lower case
    let message = input.toLowerCase();
    // variable for final encoded/decoded message
    let result = "";
    // list of all alphabets for substitution
    const listA = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    // creating arry for user input alphabets
    const listB = [...alphabet];

    // if encode is selected
    if (encode === true) {
      // loop through each character for the user input message
      for (let char in message) {
        for (let i in listA) {
          let letter = message[char];
          // loop through listA and listB and substitute them for the encoded message
          if (letter.includes(listA[i])) {
            result += listB[i];
          }
          // if the user input character is a space, adding space to the final encoded message
          if (letter.includes(" ")) {
            result += " ";
            break;
          }
        }
      }
      // returning final encoded message
      return result;
    }

    // if decode is selected
    if (encode === false){
      // loop through each character for the user input message
      for (let char in message) {
        for (let i in listB) {
          let letter = message[char];
          // loop through listA and listB and substitute them for the decoded message
          if (letter.includes(listB[i])) {
            result += listA[i];
          }
          // if the user input character is a space, adding space to the final encoded message
          if (letter.includes(" ")) {
            result += " ";
            break;
          }
        }
      }
      // returning final decoded message
      return result;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
