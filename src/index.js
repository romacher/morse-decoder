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
    var result = "";
    for (var i=0; i<expr.length; i+=10) {
        var letter_binary = expr.substr(i,10);
        if (letter_binary == "**********") result+=" ";
        else {
            var letter = "";
            for (var j=0; j<letter_binary.length; j+=2) {
                var char_binary = letter_binary.substr(j,2);
                if (char_binary == "00") continue;
                else if (char_binary == "10") letter+=".";
                     else if (char_binary == "11") letter+="-";
                        else break;
            }
            result+=MORSE_TABLE[letter];
        }
    }
    return result;
}

module.exports = {
    decode
}