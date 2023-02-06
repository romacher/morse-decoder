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
    const resic = []
    for (let i = 0; i < expr.length; i += 10){
      const chunk = expr.slice(i, i + 10)
      resic.push(chunk)
    }
    let result = resic.map(item => {
      const key = item.replace(/00/g, "").replace(/10/g, ".").replace(/11/g, "-").replace(/\*\*\*\*\*\*\*\*\*\*/g, " ");
      return key === " " ? key : MORSE_TABLE[key]
    });
    result = result.join('')
    return result
}

module.exports = {
    decode
}