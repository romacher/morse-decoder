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

const decodeLetter = letter => {
  let letter_code = letter.match(/.{1,2}/g).map(v => {
    if (v === '10') return '.'
    if (v === '11') return '-'
  }).join('')
  return MORSE_TABLE[letter_code]
}

const decodeWord = word => {
  return word.match(/.{1,10}/g).map(decodeLetter).join('')
}

function decode(expr) {
  return expr.split('**********').map(decodeWord).join(' ')
}

module.exports = {
    decode
}
