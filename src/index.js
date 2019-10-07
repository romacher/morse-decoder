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
    // write your solution here
var arr = [];
var n = "";
var str = "";

for (var i = 0; i < expr.length; j=0) {
    for(var j = 0; j < 10; j++) {
      n += expr[i];
      i++;
    }
   arr.push(n);
   n = "";
 }

for (i = 0; i < arr.length; i++) {
    for(j = 0; j < 10; j++) {
        if (arr[i][j] === '1' || arr[i][j] === '*') {
            switch(arr[i][j+1]) {
                case '0':
                    n += '.';
                    j++;
                    break;
                case '1':
                    n += '-';
                    j++;
                    break;
                case '*':
                    n += ' ';
                    j = 10;
                    break;
                default: break;
            }
        }
    }
    if (MORSE_TABLE[n])
        str += MORSE_TABLE[n];
    else str += ' ';
    n = "";
}

return str;
}

module.exports = {
    decode
}