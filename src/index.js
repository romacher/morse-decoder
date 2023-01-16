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

function decode(expr) {
  let result = '';
  for (let i = 0; i < expr.length; i += 10) {
    let letterCoding = expr.slice(i, i + 10);
    if (letterCoding === '**********') {
      result += ' ';
    } else {
      let letterDecoding = '';
      for (let j = 0; j < 10; j += 2) {
        if (letterCoding.slice(j, j + 2) === '10') {
          letterDecoding += '.';
        } else if (letterCoding.slice(j, j + 2) === '11') {
          letterDecoding += '-';
        }
      }
      result += MORSE_TABLE[letterDecoding];
    }
  }
  return result;
}

module.exports = {
    decode
}