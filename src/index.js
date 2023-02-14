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
    '**********': ' ', 
};

function decode(expr) {
    let current = [],
        decode = '',
        whidth = 10;
        widthCode = 2,
        tmp = [],
        res = '';


    for (let i = 0; i<expr.length; i += whidth ){
        tmp.push(expr.slice(i, i + whidth));        
    } 

    
    let newArr = tmp.map(function(item){
        let chunk = [],
            chunkLength = 2;
        if(item === '**********'){
           chunk.push('**********');
        }
        for (let i = 0; i<item.length; i += chunkLength ){
            if(item.slice(i, i + chunkLength)=== '11'){
                chunk.push('-');
            } else if (item.slice(i, i + chunkLength)=== '10'){
                chunk.push('.');
            }
        }
        return chunk.join('');
      
    });

    for(let h = 0; h<newArr.length; h++){
        res += MORSE_TABLE[newArr[h]];
    }

    return res;
   


}

module.exports = {
    decode
}