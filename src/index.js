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

function  decode(expr) {
    let result = '';
    let buffer;
    let digit11 = '';
    
    // console.log(MORSE_TABLE);
    
    for (const key in MORSE_TABLE) 
    {
        let digit = key.toString();
        for (let j = 0; j <= digit.length - 1; j++) 
            {
                if (digit[j] === '.') digit11 = digit11 + 10;
                else digit11 = digit11 + 11;
            }
            
            digit11 = ('0000000000' + digit11).slice(-10);
        buffer = MORSE_TABLE[key];
        MORSE_TABLE[digit11] = buffer;
        delete MORSE_TABLE[key];
        digit11 = '';
    }
    
    MORSE_TABLE["**********"] = ' ';

    for (let i = 0; i <= expr.length - 1; i+=10) 
    {
        for (const key in MORSE_TABLE) 
        {
            if (expr.slice(i, i + 10) == key) 
            {
                result += MORSE_TABLE[key];
            }
        }
    }
    
    return result;
}


module.exports = {
    decode
}
