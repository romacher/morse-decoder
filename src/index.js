const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

// function decode(expr) {
  const words = expr.split("**********");
  const decodedWords = [];

  for (const word of words) {
    const letters = [];
    for (let i = 0; i < word.length; i += 10) {
      const letterBinary = word.substr(i, 10);

      if (letterBinary !== "**********") {
        let morseLetter = "";
        for (let j = 0; j < letterBinary.length; j += 2) {
          const code = letterBinary.substr(j, 2);
          morseLetter += code === "10" ? "." : code === "11" ? "-" : "";
        }
        letters.push(MORSE_TABLE[morseLetter]);
      }
    }
    decodedWords.push(letters.join(""));
  }

  return decodedWords.join(" ");
}


module.exports = {
    decode
}
