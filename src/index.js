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
     let strUp = expr.toUpperCase();
  let arr = strUp.split('');
  let arr2 = arr.map(item =>{
    if(item === 'A'){
      return "0000001011"
    }else if(item === 'B'){
      return "0011101010"
    }else if(item === 'B'){
      return "0011101010"
    }else if(item === 'C'){
      return "0011101110"
    }else if(item === 'D'){
      return "0000111010"
    }else if(item === 'E'){
      return "0010101110"
    }else if(item === 'F'){
      return "0010101110"
    }else if(item === 'G'){
      return "0000111110"
    }else if(item === 'H'){
      return "0010101010"
    }else if(item === 'I'){
      return "0000001010"
    }else if(item === 'J'){
      return "0010111111"
    }else if(item === 'K'){
      return "0000111011"
    }else if(item === 'L'){
      return "0010111010"
    }else if(item === 'M'){
      return "0000001111"
    }else if(item === 'N'){
      return "0000001110"
    }else if(item === 'O'){
      return "0000111111"
    }else if(item === 'P'){
      return "0010111110"
    }else if(item === 'Q'){
      return "0011111011"
    }else if(item === 'R'){
      return "0000101110"
    }else if(item === 'S'){
      return "0000101010"
    }else if(item === 'T'){
      return "0000000011"
    }else if(item === 'U'){
      return "0000101011"
    }else if(item === 'V'){
      return "0010101011"
    }else if(item === 'W'){
      return "0000101111"
    }else if(item === 'X'){
      return "0011101011"
    }else if(item === 'Y'){
      return "0011101111"
    }else if(item === 'Z'){
      return "0011111010";
    }else if(item === '1'){
      return "1011111111";
    }else if(item === '2'){
      return "1010111111";
    }else if(item === '3'){
      return "1010101111";
    }else if(item === '4'){
      return "1010101011";
    }else if(item === '5'){
      return "1010101010";
    }else if(item === '6'){
      return "1110101010";
    }else if(item === '7'){
      return "1111101010";
    }else if(item === '8'){
      return "1111111010";
    }else if(item === '9'){
      return "1111111110";
    }else if(item === '0'){
      return "1111111111";
    }else if(item === ' '){
      return "**********";}                      
  
   return item;});
   let rezult = arr2.join('');
   return rezult;
}

module.exports = {
    decode
}
