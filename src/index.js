const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

// 10 = .
// 11 = -

function decode(expr) {
  let partWord = "";
  let res = "";
  for (let i = 0, j = 1; i < expr.length; i++, j++) {
    partWord += expr[i];
    if (partWord.length == 10) {
      res += word(partWord);
    }
    if (j == 10) {
      j = 0;
      partWord = "";
    }
  }
  return res;
  function word(dec) {
    if (dec == "**********") {
      return " ";
    }
    let result = "";
    let dec1 = Number(dec).toString();
    for (let i = 0; i < dec1.length; i++) {
      let count = "";
      count = dec1[i++] + dec1[i];
      if (count == 10) {
        result += ".";
      } else if (count == 11) {
        result += "-";
      }
    }
    for (let i in MORSE_TABLE) {
      if (i == result) {
        return MORSE_TABLE[i];
      }
    }
  }
}

module.exports = {
  decode,
};
