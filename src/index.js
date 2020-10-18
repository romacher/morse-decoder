const switchLetter = (s) => {
    switch (s) {
        case '.-': return    'a';
        case '-...': return  'b';
        case '-.-.': return  'c';
        case '-..': return   'd';
        case '.': return     'e';
        case '..-.': return  'f';
        case '--.': return   'g';
        case '....': return  'h';
        case '..': return    'i';
        case '.---': return  'j';
        case '-.-': return   'k';
        case '.-..': return  'l';
        case '--': return    'm';
        case '-.': return    'n';
        case '---': return   'o';
        case '.--.': return  'p';
        case '--.-': return  'q';
        case '.-.': return   'r';
        case '...': return   's';
        case '-': return     't';
        case '..-': return   'u';
        case '...-': return  'v';
        case '.--': return   'w';
        case '-..-': return  'x';
        case '-.--': return  'y';
        case '--..': return  'z';
        case '.----': return '1';
        case '..---': return '2';
        case '...--': return '3';
        case '....-': return '4';
        case '.....': return '5';
        case '-....': return '6';
        case '--...': return '7';
        case '---..': return '8';
        case '----.': return '9';
        case '-----': return '0';
        case ' ': return     ' ';
    }
    
}

function decode(expr) {
  let a = [];
  let b = [];
  let str = '';
  for (let i = 0; i < expr.length; i += 10){
    a.push(expr.slice(i, i + 10));
}
  for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a[i].length; j += 2) {
          if (a[i][j] + a[i][j+1] === '10') {
              str += '.';
          }
          if (a[i][j] + a[i][j+1] === '11') {
            str += '-';
          }
          if (a[i][j] + a[i][j+1] === '**') {
            str += ' ';
            break;
          }  
      }
      b.push(str);
      str = '';
  }
  for (i = 0; i < b.length; i++) {
      str += switchLetter(b[i]);
  }  
  return str;
}

module.exports = {
    decode
}