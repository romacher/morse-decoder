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
    var arrInput = expr.match(/.{1,10}/g);
    var std = '';
    var result = '';
    
    for (i = 0; i < arrInput.length; i++) {
        for(j = 0; j < 10; j++) {
            if (arrInput[i][j] === '1' || arrInput[i][j] === '*') {
                switch(arrInput[i][j+1]) { 
                    case '0':
                        std += '.';
                        j++;
                        break;
                    case '1':
                        std += '-';
                        j++;
                        break;
                    case '*':
                        std += ' ';
                        j = 10;
                        break;
                    default: break;
                }
            }
        }
        if (MORSE_TABLE[std])
            result += MORSE_TABLE[std];
        else result += ' ';
        std = "";
}

return result;
}

module.exports = {
    decode
}