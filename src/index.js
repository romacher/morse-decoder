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
    ' ':  ' ',
};

function decode(expr) {
    
        let newArray = [];  
        for(let i=0; i < expr.length; i+=10) {
        newArray.push(expr.slice(i, i+10));
        }      
        let array = []; 
      for(let n=0; n < newArray.length; n++){
        let strInArr = '';
        for(let j=0; j < newArray[n].length; j+=2){    
          
          if( newArray[n][j] + newArray[n][j+1] == '10'){
            strInArr += '.';
          }
          if( newArray[n][j] + newArray[n][j+1] == '11'){
            strInArr += '-';          
        } 
         if( newArray[n] === '**********'){
            strInArr = ' ';          
        }       
      }
        array.push(strInArr);      
    }
  
      let outputString ='';
     for(let k =0; k < array.length; k++){
    outputString += MORSE_TABLE[array[k]];
    }
    return outputString;
  }


module.exports = {
    decode
}