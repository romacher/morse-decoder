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

    let arrBig = [];
    let arrBigSize = 10;

    let arrSmall = [];
    let arrSmallSize = 2;

    let letter = '';
    let arr = [];

    while (expr) {
        if (expr.length < arrBigSize) {
            arrBig.push(expr);
            break;
        }
        else {
            arrBig.push(expr.substr(0, arrBigSize));
            expr = expr.substr(arrBigSize);
        }
    }
    for(let i = 0; i < arrBig.length; i++) {

        if( i == 0) {
            arr.push(arrBig[i]);
        } else {
            arr.splice(0, 1, arrBig[i]);3
        }

        let arrPrew = [];
        
        arr.forEach(element => {
            while (element) {
                if(element == '**********') { 
                    arrPrew.push(" ");
                    break;
                }
                if (element.length < arrSmallSize) {
                    arrPrew.push(element);
                    break;
                } else {
                    if(element.substr(0, arrSmallSize) == '10') {
                        arrPrew.push(".");
                    } else if(element.substr(0, arrSmallSize) == '11') {
                        arrPrew.push("-");
                    } else {}
                    element = element.substr(arrSmallSize);
                }
            }
            arrSmall.push(arrPrew);
        });
    }
    for(let i =0; i < arrSmall.length; i++) {
        if(MORSE_TABLE[arrSmall[i].join('')] == undefined) {
            letter += ' ';
        } else {
            letter += MORSE_TABLE[arrSmall[i].join('')];
        }
    }
    return letter;
}

module.exports = {
    decode
}