// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // return false for the conditions given
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    // flip the shift to opposite direction when decode is selected
    if (encode === false) {
      shift *= -1;
    }
    // change all letters from message to lower case
    let message = input.toLowerCase();
    let result = "";

    // loop through the message for to determine if each index needs to be shifted
    for (let i in message) {
      let letter = message[i];
      // getting the code for the encoded letter
      let newCode = letter.charCodeAt(0) + shift;
      if (letter.match(/[a-z]/)) {
        // loops back to beginning of the alphabet when shifting past z
        if (newCode > 122) {
          newCode = newCode - 26;
        }
        // loops to the end f alphabet when shifting past a
        if (newCode < 97) {
          newCode = newCode + 26;
        }
        // retrun the new letter to add to the result
        let newLetter = String.fromCharCode(newCode);
        result += newLetter;
      } else {
        // add the letter directly from user's input when it is not an alphabet
        result += letter;
      }
    }
    return result;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
