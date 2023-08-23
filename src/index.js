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

const decodeLetter = letter => {
    if (letter.toString() === '**********') return ' ';
    let couple = letter.toString().match(/.{1,2}/g) || [];
    let arr = couple.map(value => {
        switch (value) {
            case '00': return '';
            case '10': return '.';
            case '11': return '-';
        }
    })
    return MORSE_TABLE[arr.join('')];
}


function decode(expr) {
    let arr = expr.match(/.{1,10}/g) || [];
    return arr.map(decodeLetter).join('');
}


module.exports = {
    decode
}