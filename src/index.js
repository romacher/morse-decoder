const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let exprArr = expr.split('');
  let morseStr = '';
  for (let i = 0; i < exprArr.length; i += 2) {
    if (i > 8) {
      exprArr.splice(0, 10);
      morseStr += ' ';
      i = -2;
      continue;
    }
    if (`${exprArr[i]}${exprArr[i + 1]}` === '10') {
      morseStr += '.';
    } else if (`${exprArr[i]}${exprArr[i + 1]}` === '11') {
      morseStr += '-';
    }

    if (`${exprArr[i]}${exprArr[i + 1]}` === '**') {
      exprArr.splice(0, 10);
      morseStr += ' * ';
      i = -2;
      continue;
    }
  }

  let result = morseStr.split(' ').map((item) => {
    if (item === '*') {
      item = item;
    } else {
      item = MORSE_TABLE[item];
    }

    return item;
  });
  result = result.join('');
  result = result.split('*');
  result = result.join(' ');

  return result;
}

module.exports = {
  decode,
};
