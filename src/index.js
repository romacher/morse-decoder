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

    let decodedString = '';

    for(let i = 0; i < expr.length; i += 10) {

        let segm = expr.slice(i, i + 10);

        if (segm === '**********'){
            decodedString += ' ';
        } else {
            let morseSymbol = '';

            for (let j = 0; j < segm.length; j += 2){
                
                let pairDigit = segm.slice(j, j + 2 );
                
                if (pairDigit === '10') {
                    morseSymbol += '.';
                } else if (pairDigit === '11') {
                    morseSymbol += '-';
                }
            }

            if (morseSymbol in MORSE_TABLE) {
                decodedString += MORSE_TABLE[morseSymbol];
            }
        }
    }

    return decodedString;
}

module.exports = {
    decode
}