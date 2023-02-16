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
    let result = ""
    for (let i = 0, j = 10; i < expr.length; i = i + 10, j = j + 10) {
        let Number = "";
        Number = expr.slice(i, j);
        let morse = "";
        if (Number === "**********") {
            morse = morse + " ";
        } else {
            for (let a = 0, b = 2; a < 10; a = a + 2, b = b + 2) {
                if(Number.slice(a, b) === "10") {
                    morse = morse + ".";
                }
                else if(Number.slice(a, b) === "11") {
                    morse = morse + "-";
                }
            }  
        }
        if (morse === " ") {
            result = result + " ";
        } else {
            result = result + MORSE_TABLE[morse]
        }
    }
    return result
    }

module.exports = {
    decode
}