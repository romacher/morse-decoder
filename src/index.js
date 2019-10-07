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
    let string1 = expr.match(/[0-9-\*]{10}/g);
    let arr = string1.map(elem => elem.replace(/[01]{2}/g, function(elem2){
        switch(elem2){
            case '00':
                return "";
                break;
            case '10':
                return ".";
                break;
            case '11':
                return "-";
                break;
           
           
        }
    }));
    let result = "";
   for(let i = 0; i < arr.length; i++){
       if(arr[i] == "**********"){
           result += " ";
       }else{
           result += MORSE_TABLE[arr[i]];
       }
        
    
          
}    
      return result;
}

module.exports = {
    decode
}