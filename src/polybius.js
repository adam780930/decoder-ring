// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // changing all letters to lower case
    let message = input.toLowerCase();
    let result = "";
    // an array of objects with each alphabets as key and their corresponding code as value
    const list = [
      { a: 11 },
      { b: 21 },
      { c: 31 },
      { d: 41 },
      { e: 51 },
      { f: 12 },
      { g: 22 },
      { h: 32 },
      { k: 52 },
      { l: 13 },
      { m: 23 },
      { n: 33 },
      { o: 43 },
      { p: 53 },
      { q: 14 },
      { r: 24 },
      { s: 34 },
      { t: 44 },
      { u: 54 },
      { v: 15 },
      { w: 25 },
      { x: 35 },
      { y: 45 },
      { z: 55 },
    ];
    // when encode is selected
    if (encode === true) {
      // looping through each char and each objects in the array
      for (let char in message) {
        for (let i in list) {
          // when the character is an alphabet, adding the corresponding number to the encoded message
          if (message[char].match(/[a-z]/)) {
            if (message[char].includes(Object.keys(list[i]))) {
              result += Object.values(list[i]);
            }
            // encoding i and j into 42
            if (message[char] === "i" || message[char] === "j") {
              result += "42";
              break;
            }
            // included all non-alphabet characters into the encoded message
          } else {
            result += message[char];
            break;
          }
        }
      }
      // return final encoded message
      return result;
    }
    // when decode is selected
    if (encode === false) {
      // return false when the total number of digits entered is not even
      let count = (message.match(/\d/g) || []).length;
      if (count % 2 == 1) {
        return false;
      }
      // break down and group numbers in groups of 2, and replace space with number: 99
      let newMessage = message.split(" ").join("99");
      let newNum = newMessage.match(/..?/g);

      // loop the array from above and match them with their corresponding alphabets
      for (let num in newNum) {
        for (let i in list) {
          if (newNum[num].includes(Object.values(list[i]))) {
            result += Object.keys(list[i]);
          }
          // adding i/j into the decoded message when 42 is in the user input
          if (newNum[num] === "42") {
            result += "i/j";
            break;
          }
          // adding the space back into the decoded message
          if (newNum[num] === "99") {
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
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
