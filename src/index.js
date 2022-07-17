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
    '*****':  ' ',
};

function decode(expr) {
    const result =[];
    for (let i=0; i < expr.length; i+=10){
        let word1 = expr.substr(i, 10);
        let result1= '';

        for (let i=0; i<word1.length; i+=2){
            
            let word2 = word1.substr(i, 2)

        if(word2 == "10"){ result1 += '.'
        }else if(word2 == "11"){ result1 += '-'
        }else if(word2 == '**') {result1 += '*'}

        }

        result.push(result1);

    }
     const better = result.map(x => MORSE_TABLE[x]);
     const theBest = better.join('')


return theBest
}



module.exports = {
    decode
}