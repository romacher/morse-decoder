const sample = {
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

// function decode(exemple) {
//   let partWord = "";
//   let res = "";
//   for (let i = 0, j = 1; i < exemple.length; i++, j++) {
//     partWord += exemple[i];
//     if (partWord.length == 10) {
//       res += word(partWord);
//     }
//     if (j == 10) {
//       j = 0;
//       partWord = "";
//     }
//   }
//   return res;

//   function word(dec) {
//     if (dec == "**********") {
//       return " ";
//     }
//     let result = "";
//     let dec1 = Number(dec).toString();
//     for (let i = 0; i < dec1.length; i++) {
//       let count = "";
//       count = dec1[i++] + dec1[i];
//       if (count == 10) {
//         result += ".";
//       } else if (count == 11) {
//         result += "-";
//       }
//     }
//     for (let i in sample) {
//       if (i == result) {
//         return sample[i];
//       }
//     }
//   }
// }
//  Перерешал из двух функций сделал одну !!!
function decode(exemple) {
  let count = "",
    countMidl = "",
    word = "";
  for (let i = 0, j = 1; i < exemple.length; i++, j++) {
    if (i % 2 == 1) {
      count += exemple[i];
      switch (count) {
        case "00":
          countMidl;
          break;
        case "10":
          countMidl += ".";
          break;
        case "11":
          countMidl += "-";
          break;
      }
      count = "";
    } else {
      count += exemple[i];
      if (exemple[i - 1] == "*" && word[word.length - 1] !== " ") {
        word += " ";
      }
    }
    if (j % 10 == 0) {
      sample[countMidl] ? (word += sample[countMidl]) : "";
      countMidl = "";
    }
  }
  return word;
}

module.exports = {
  decode,
};
