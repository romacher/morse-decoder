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
    ' ': ' ',
};
let simvol ={
    ['10']:  '.',
    ['11']:  '-', 
    [' ']: " ",
}
function decode(expr) {
let  arr = [];

let mass =[];
let result = '';
 for (let i = 0; i< expr.length;  i = i+10) {
    arr.push((expr.slice(i, (i+10))));
  }
 

  for (let j = 0; j< arr.length;  j++) {
    
    let index = arr[j].indexOf(1);
    if (index !== -1){
    arr[j] = arr[j].slice(index, (arr[j].length))
    }
    else if (arr[j] === '**********'){
        arr[j] = ' '
    }
}

for (let i=0; i<arr.length; i++){
    res = ""
            for (let j=0; j<arr[i].length; j=j+2){
                let final=j+2;
                let currentValue=arr[i].slice([j], final);
                res = res + `${simvol[currentValue]}`
                }

        mass.push(res);
    }
 for (let i=0; i<mass.length; i++){
    if (mass[i]  === ' ' ){
        result = result + mass[i];
    }
    else{
       result = result + MORSE_TABLE[mass[i]]; 
    }
   
 }

return result;

}

module.exports = {
    decode
}